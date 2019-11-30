import express = require("express");

const app: express.Application = express();

app.get("/", (req, res): void => {
  res.send("Hello World!");
});

app.listen(8080, (): void => {
  console.log("Listening on port 8080!");
});
