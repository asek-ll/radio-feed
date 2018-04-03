package main

import (
    "fmt"
    "log"
    "net/http"
    "io"
    "os"
    "regexp"
)

func main() {
    http.HandleFunc("/", handle)
    http.HandleFunc("/_ah/health", healthCheckHandler)
    http.HandleFunc("/feed", feedHandler)
    http.HandleFunc("/update-feed", feedUpdateHandler)
    http.HandleFunc("/full-update-feed", fullFeedUpdateHandler)
    http.HandleFunc("/file/", fileProxyHandler)


    log.Print("Listening on port 8087")
    log.Fatal(http.ListenAndServe(":8087", nil))
}

func handle(w http.ResponseWriter, r *http.Request) {
    if r.URL.Path != "/" {
        http.NotFound(w, r)
        return
    }
    fmt.Fprint(w, "Hello world!")
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "ok")
}

func feedHandler(w http.ResponseWriter, r *http.Request) {

    file, _ := os.Open("./feed.xml")

    io.Copy(w, file)
}

func feedUpdateHandler(w http.ResponseWriter, r *http.Request) {

    ScrapeFeed()

    fmt.Fprint(w, "update-feed")
}


func fileProxyHandler(w http.ResponseWriter, r *http.Request) {
    re := regexp.MustCompile("/file/(.+)")
    match := re.FindStringSubmatch(r.URL.EscapedPath())

    fileUrl := GetFileUrl("http://svoeradio.fm/" + match[1])

    if fileUrl != "" {
        http.Redirect(w, r, fileUrl, 301)
    } else {
        fmt.Fprint(w, "Bad file url: ", match[1])
    }

}
func fullFeedUpdateHandler(w http.ResponseWriter, r *http.Request) {
    ScrapeAllAudioArchives()
    fmt.Fprint(w, "full-update-feed")
}
