package main

import (
	"fmt"
	"net/http"

	"github.com/gobuffalo/packr"
	"github.com/zserge/webview"
)

func main() {
	// Pack App
	folder := packr.NewBox("../build")

	// Run server at port 8000 as goroutine
	http.Handle("/", http.FileServer(folder))
	go http.ListenAndServe(":8000", nil)

	// launch webview
	debug := false
	app := webview.New(debug)
	defer app.Destroy()

	app.SetTitle("Harmonics")
	app.SetSize(800, 600, webview.HintNone)
	app.Navigate("http://localhost:8000")

	app.Dispatch(func() {
		// Inject JS to disable right click and inspect element
		app.Eval(fmt.Sprintf(`
	      $(document).on("contextmenu",function(e){
	            e.preventDefault();
	      });
	   `))
	})

	app.Run()
}
