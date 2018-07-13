package main

import (
	// import standard libraries
	"context"
	"crypto/sha1"
	"encoding/base64"
	"fmt"
	"log"
	"net/url"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/gorilla/feeds"
	"google.golang.org/appengine/urlfetch"
)

const shortForm = "2006-Jan-02"

func ScrapeFeed(ctx *context.Context) string {
	feed := &feeds.Feed{
		Title:       "Своё Радио",
		Link:        &feeds.Link{Href: "https://youtube.com/channel/UCpT2HfwVbQTkDNA-chwgRew"},
		Description: "Официальный канал радиостанции Своё Радио. Архивы",
		Items:       ScrapePageItems(1, "http://svoeradio.fm/archive/audio-archive", ctx),
	}

	rss, _ := feed.ToRss()

	return rss
}

func ScrapeAllAudioArchives(ctx *context.Context) string {
	feed := &feeds.Feed{
		Title:       "Своё Радио",
		Link:        &feeds.Link{Href: "https://youtube.com/channel/UCpT2HfwVbQTkDNA-chwgRew"},
		Description: "Официальный канал радиостанции Своё Радио. Архивы",
	}

	for i := 1; true; i++ {
		items := ScrapePageItems(i, "http://svoeradio.fm/archive/audio-archive", ctx)
		if len(items) == 0 {
			break
		}
		feed.Items = append(feed.Items, items...)
	}

	rss, _ := feed.ToRss()

	return rss
}

func getGoQuery(url string, ctx *context.Context) (*goquery.Document, error) {
	client := urlfetch.Client(*ctx)
	resp, err := client.Get(url)

    if err != nil {
        return nil, err
    }

	doc, err := goquery.NewDocumentFromReader(resp.Body)
	return doc, err
}

func getFileLink(playerURL string, ttl int, ctx *context.Context) string {

	playerdoc, err := getGoQuery(playerURL, ctx)
	var fileLink string

	if err != nil {
		fmt.Print("Error\n")
	} else {
		fileLinkTag := playerdoc.Find(".dl_url a")
		fileLink, _ = fileLinkTag.Attr("href")
	}

	if fileLink == "" && ttl > 0 {
		return getFileLink(playerURL, ttl-1, ctx)
	}
	return fileLink

}

func GetFileURL(link string, ctx *context.Context) string {

	subdoc, err := getGoQuery(link, ctx)
	if err != nil {
		return ""
	}

	title := subdoc.Find(".current").Text()

	iframe := subdoc.Find("[name='embeddedPlayer']")
	playerSrc, _ := iframe.Attr("src")

	date := subdoc.Find(".post_date .date").Text()
	month := subdoc.Find(".post_date .month").Text()
	year := subdoc.Find(".post_date .year").Text()

	hasher := sha1.New()
	hasher.Write([]byte(year + "-" + month + "-" + date + ": " + title))
	playerURL, _ := url.Parse("http:" + playerSrc)

	return getFileLink(playerURL.String(), 5, ctx)
}

func ScrapePageItems(page int, url string, ctx *context.Context) []*feeds.Item {
	fmt.Printf("scrape page %d at %s \n", page, url)
	doc, err := getGoQuery(fmt.Sprintf(url+"/page/%d", page), ctx)
	if err != nil {
		log.Fatal(err)
	}

	var items []*feeds.Item

	doc.Find("article").Each(func(index int, item *goquery.Selection) {
		linkTag := item.Find(".post_info a")
		link, _ := linkTag.Attr("href")

		title := strings.TrimSpace(item.Find(".post_text h2").Text())
		description := strings.TrimSpace(item.Find(".post_text h3").Text())

		date := item.Find(".post_date .date").Text()
		month := item.Find(".post_date .month").Text()
		year := item.Find(".post_date .year").Text()

		hasher := sha1.New()
		hasher.Write([]byte(year + "-" + month + "-" + date + ": " + title))
		id := base64.URLEncoding.EncodeToString(hasher.Sum(nil))

		published, _ := time.Parse(shortForm, year+"-"+month+"-"+date)

		fileLink := strings.Replace(link, "http://svoeradio.fm/", "http://svoe-feed.appspot.com/file/", 1)

		feedItem := &feeds.Item{
			Id:          id,
			Title:       title,
			Link:        &feeds.Link{Href: link},
			Enclosure:   &feeds.Enclosure{Url: fileLink, Length: "0", Type: "audio/mpeg"},
			Created:     published,
			Description: description,
		}

		items = append(items, feedItem)

	})
	return items
}

func GetFeedFromRecords(records *[]Record) string {
	var items []*feeds.Item
	for _, record := range *records {
		feedItem := &feeds.Item{
			Id:          record.ID,
			Title:       record.Title,
			Link:        &feeds.Link{Href: record.Link},
			Enclosure:   &feeds.Enclosure{Url: record.FileLink, Length: "0", Type: "audio/mpeg"},
			Created:     time.Unix(int64(record.Created), 0),
			Description: record.Description,
		}

		items = append(items, feedItem)
	}

	feed := &feeds.Feed{
		Title:       "Custom Feed",
		Link:        &feeds.Link{Href: ""},
		Description: "Custom feed audios",
		Items:       items,
	}

	rss, _ := feed.ToRss()

	return rss
}

func ScrapeRecords(page int, url string, ctx *context.Context) *[]Record {
	fmt.Printf("scrape page %d at %s \n", page, url)
	doc, err := getGoQuery(fmt.Sprintf(url+"/page/%d", page), ctx)
	if err != nil {
		log.Fatal(err)
	}

	var items []Record

	doc.Find("article").Each(func(index int, item *goquery.Selection) {
		linkTag := item.Find(".post_info a")
		link, _ := linkTag.Attr("href")

		title := strings.TrimSpace(item.Find(".post_text h2").Text())
		description := strings.TrimSpace(item.Find(".post_text h3").Text())

		date := item.Find(".post_date .date").Text()
		month := item.Find(".post_date .month").Text()
		year := item.Find(".post_date .year").Text()

		hasher := sha1.New()
		hasher.Write([]byte(year + "-" + month + "-" + date + ": " + title))
		id := base64.URLEncoding.EncodeToString(hasher.Sum(nil))

		published, _ := time.Parse(shortForm, year+"-"+month+"-"+date)

		fileLink := strings.Replace(link, "http://svoeradio.fm/", "http://svoe-feed.appspot.com/file/", 1)

		record := Record{
			ID:          id,
			Title:       title,
			Link:        link,
			FileLink:    fileLink,
			Description: description,
			Created:     int(published.Unix()),
		}

		items = append(items, record)

	})
	return &items
}
