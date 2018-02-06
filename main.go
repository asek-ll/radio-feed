package main

import (
    "fmt"
    "log"
    "net/http"
    "io"
    "os"
)

func main() {
    http.HandleFunc("/", handle)
    http.HandleFunc("/_ah/health", healthCheckHandler)
    http.HandleFunc("/feed", feedHandler)
    http.HandleFunc("/update-feed", feedUpdateHandler)


    log.Print("Listening on port 8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
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
