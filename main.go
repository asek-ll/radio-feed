package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"regexp"

	"github.com/gorilla/mux"
	"google.golang.org/appengine"
	"google.golang.org/appengine/datastore"
	"google.golang.org/appengine/log"
)

type Record struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Link        string `json:"link"`
	FileLink    string `json:"fileLink"`
	Created     int    `json:"created"`
	Readed      bool   `json:"readed"`
	Current     bool   `json:"current"`
}

func main() {
	registerHandlers()
	appengine.Main()
}

func registerHandlers() {
	r := mux.NewRouter()
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	r.HandleFunc("/_ah/health", healthCheckHandler)
	r.HandleFunc("/feed", feedHandler)
	r.HandleFunc("/file/", fileProxyHandler)
	r.HandleFunc("/svoe-migrate", migrateSvoeRecords).Methods("GET")
	r.HandleFunc("/records", getRecordsHandler).Methods("GET")
	r.HandleFunc("/records/current", getCurrentRecordsHandler).Methods("GET")
	r.HandleFunc("/records/current/{id}", setCurrentRecordHandler).Methods("PUT")
	//r.HandleFunc("/records/unreaded", getRecordsHandler).Methods("GET")

	http.Handle("/", r)
	//http.HandleFunc("/", handle)
}

func handle(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}

	ctx := appengine.NewContext(r)
	record := &Record{Title: "test title", Description: "test description", Link: "test url"}
	key := datastore.NewIncompleteKey(ctx, "Records", nil)

	key, err := datastore.Put(ctx, key, record)

	_ = err

	fmt.Fprint(w, "Hello world!", key)
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "ok")
}

func feedHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	q := datastore.NewQuery("Records").
		Order("-Created")

	var records []Record

	_, err := q.GetAll(ctx, &records)

	if err == nil {
		rss := GetFeedFromRecords(&records)
		w.Header().Set("Content-Type", "application/xml")
		fmt.Fprint(w, rss)
	} else {
		fmt.Fprint(w, err)
	}

}

func fileProxyHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	re := regexp.MustCompile("/file/(.+)")
	match := re.FindStringSubmatch(r.URL.EscapedPath())

	fileURL := GetFileURL("http://svoeradio.fm/"+match[1], &ctx)

	if fileURL != "" {
		http.Redirect(w, r, fileURL, 301)
	} else {
		fmt.Fprint(w, "Bad file url: ", match[1])
	}

}

func getRecordsHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	q := datastore.NewQuery("Records")

	var records []Record

	q.GetAll(ctx, &records)

	json.NewEncoder(w).Encode(records)
}

func getCurrentRecordsHandler(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	q := datastore.NewQuery("Records").Filter("Current =", true)

	var records []Record

	q.GetAll(ctx, &records)

	if records == nil {
		records = []Record{}
	}

	json.NewEncoder(w).Encode(records)
}

func getRecordByID(id string, ctx *context.Context) (*datastore.Key, *Record) {
	log.Debugf(*ctx, "Get record by id %s", id)
	q := datastore.NewQuery("Records").
		Filter("ID =", id).
		Limit(50).
		Offset(50)

	var records []Record
	keys, err := q.GetAll(*ctx, &records)

	if err != nil {
		log.Errorf(*ctx, "Error on query %v", err)
	}

	if records != nil {
		log.Debugf(*ctx, "Finded")
		return keys[0], &records[0]
	}
	log.Debugf(*ctx, "NotFinded")
	return nil, nil
}

func setCurrentRecordHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	ctx := appengine.NewContext(r)

	key, record := getRecordByID(vars["id"], &ctx)

	if record != nil {
		record.Current = true
		datastore.Put(ctx, key, record)

		json.NewEncoder(w).Encode(record)
	}

}

func addOrUpdateRecord(record *Record, ctx *context.Context) {
	key, _ := getRecordByID(record.ID, ctx)

	if key == nil {
		key = datastore.NewIncompleteKey(*ctx, "Records", nil)
	}

	datastore.Put(*ctx, key, record)
}

func migrateSvoeRecords(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)

	for i := 0; true; i++ {
		records := ScrapeRecords(i, "http://svoeradio.fm/archive/audio-archive", &ctx)

		if len(records) == 0 {
			break
		}

		for _, record := range records {
			addOrUpdateRecord(record, &ctx)
		}

	}

	fmt.Fprint(w, "Done")

}
