package main

import (
    // import standard libraries
    "fmt"
    "log"
    "net/url"
    "os"
    "time"

    "github.com/gorilla/feeds"
    "github.com/PuerkitoBio/goquery"
)

const shortForm = "2006-Jan-02"

func ScrapeFeed() {
    doc, err := goquery.NewDocument("http://svoeradio.fm/archive/audio-archive/alive/")
    if err != nil {
        log.Fatal(err)
    }

    feed := &feeds.Feed{
        Title:       "Своё Радио",
        Link:        &feeds.Link{Href: "https://youtube.com/channel/UCpT2HfwVbQTkDNA-chwgRew"},
        Description: "Официальный канал радиостанции Своё Радио. Архивы",
    }

    // use CSS selector found with the browser inspector
    // for each, use index and item
    doc.Find("article").Each(func(index int, item *goquery.Selection) {
        linkTag := item.Find(".post_info a")
        link, _ := linkTag.Attr("href")

        subdoc, err := goquery.NewDocument(link)
        if err != nil {
            fmt.Print("Error\n")
        } else {

            title := subdoc.Find(".current").Text()

            iframe := subdoc.Find("[name='embeddedPlayer']")
            playerSrc, _ := iframe.Attr("src")

            date := subdoc.Find(".post_date .date").Text()
            month := subdoc.Find(".post_date .month").Text()
            year := subdoc.Find(".post_date .year").Text()

            published, _ := time.Parse(shortForm, year +"-" + month + "-" + date)

            playerUrl, _ := url.Parse("http:" + playerSrc);

            fileLink := getFileLink(playerUrl.String(), 5)

            if fileLink != "" {

                fileUrl, err := url.Parse(fileLink)

                if err == nil {

                    queryValues := fileUrl.Query()

                    contentType := queryValues.Get("content_type")
                    length := queryValues.Get("fsize")

                    feed.Items = append(feed.Items, 
                    &feeds.Item{
                        Id: fileLink,
                        Title:       title,
                        Link:        &feeds.Link{Href: link},
                        Enclosure:   &feeds.Enclosure{Url: fileLink, Length: length, Type: contentType},
                        Created:     published,
                    })

                }

            }


        }

    })
    rss, err := feed.ToRss()

    f, _ := os.OpenFile("./feed.xml", os.O_CREATE, 0755)
    defer f.Close()

    f.Write([]byte(rss))
}

func getFileLink(playerUrl string, ttl int) string{


    playerdoc, err := goquery.NewDocument(playerUrl)
    var fileLink string = "";

    if err != nil {
        fmt.Print("Error\n")
    } else {
        fileLinkTag := playerdoc.Find(".dl_url a")
        fileLink, _ = fileLinkTag.Attr("href")
    }

    if fileLink == "" && ttl > 0 {
        return getFileLink(playerUrl, ttl - 1);
    }
    return fileLink;

}
