package main

import (
	"fmt"
	"net/http"
	"regexp"

	"google.golang.org/appengine"
)

func main() {
	registerHandlers()
	appengine.Main()
}

func registerHandlers() {
	http.HandleFunc("/", handle)
	http.HandleFunc("/_ah/health", healthCheckHandler)
	http.HandleFunc("/feed", feedHandler)
	http.HandleFunc("/file/", fileProxyHandler)
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
	ctx := appengine.NewContext(r)
	rss := ScrapeFeed(&ctx)

	w.Header().Set("Content-Type", "application/xml")
	fmt.Fprint(w, rss)
}

func fileProxyHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	re := regexp.MustCompile("/file/(.+)")
	match := re.FindStringSubmatch(r.URL.EscapedPath())

	fileUrl := GetFileUrl("http://svoeradio.fm/"+match[1], &ctx)

	if fileUrl != "" {
		http.Redirect(w, r, fileUrl, 301)
	} else {
		fmt.Fprint(w, "Bad file url: ", match[1])
	}

}
