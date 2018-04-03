package main

import (
	// import standard libraries
	"crypto/sha1"
	"encoding/base64"
	"fmt"
	"log"
	"net/url"
	"os"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/gorilla/feeds"
)

const shortForm = "2006-Jan-02"

func ScrapeFeed() {
	feed := &feeds.Feed{
		Title:       "Своё Радио",
		Link:        &feeds.Link{Href: "https://youtube.com/channel/UCpT2HfwVbQTkDNA-chwgRew"},
		Description: "Официальный канал радиостанции Своё Радио. Архивы",
		Items:       ScrapePageItems(1, "http://svoeradio.fm/archive/audio-archive"),
	}

	rss, _ := feed.ToRss()

	f, _ := os.OpenFile("./feed.xml", os.O_CREATE, 0755)
	defer f.Close()

	f.Write([]byte(rss))
}

func ScrapeAllAudioArchives() {
	feed := &feeds.Feed{
		Title:       "Своё Радио",
		Link:        &feeds.Link{Href: "https://youtube.com/channel/UCpT2HfwVbQTkDNA-chwgRew"},
		Description: "Официальный канал радиостанции Своё Радио. Архивы",
	}

	for i := 1; true; i++ {
		items := ScrapePageItems(i, "http://svoeradio.fm/archive/audio-archive")
		if len(items) == 0 {
			break
		}
		feed.Items = append(feed.Items, items...)
	}

	rss, _ := feed.ToRss()

	f, _ := os.OpenFile("./feed.xml", os.O_CREATE, 0755)
	defer f.Close()

	f.Write([]byte(rss))
}

func getFileLink(playerUrl string, ttl int) string {

	playerdoc, err := goquery.NewDocument(playerUrl)
	var fileLink string = ""

	if err != nil {
		fmt.Print("Error\n")
	} else {
		fileLinkTag := playerdoc.Find(".dl_url a")
		fileLink, _ = fileLinkTag.Attr("href")
	}

	if fileLink == "" && ttl > 0 {
		return getFileLink(playerUrl, ttl-1)
	}
	return fileLink

}

func GetFileUrl(link string) string {

	subdoc, err := goquery.NewDocument(link)
	if err != nil {
		return ""
	} else {

		title := subdoc.Find(".current").Text()

		iframe := subdoc.Find("[name='embeddedPlayer']")
		playerSrc, _ := iframe.Attr("src")

		date := subdoc.Find(".post_date .date").Text()
		month := subdoc.Find(".post_date .month").Text()
		year := subdoc.Find(".post_date .year").Text()

		hasher := sha1.New()
		hasher.Write([]byte(year + "-" + month + "-" + date + ": " + title))
		playerUrl, _ := url.Parse("http:" + playerSrc)

		return getFileLink(playerUrl.String(), 5)
	}
}

func ScrapePageItems(page int, url string) []*feeds.Item {
	fmt.Printf("scrape page %d at %s \n", page, url)
	doc, err := goquery.NewDocument(fmt.Sprintf(url+"/page/%d", page))
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

		fileLink := strings.Replace(link, "http://svoeradio.fm/", "http://vottd-denblo2:8087/file/", 1)

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

func ScrapeAlivePageItems(page int) []*feeds.Item {
	return ScrapePageItems(page, "http://svoeradio.fm/archive/audio-archive/alive")
}
