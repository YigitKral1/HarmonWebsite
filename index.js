const express = require("express");

const app = express();

app.listen(8080);

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});
