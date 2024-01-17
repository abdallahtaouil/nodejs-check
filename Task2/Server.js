const express = require("express");
const app = express();
const port = 3000;
app.listen(port, console.log("server is running"));
app.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" }); //saying that the content would be html
  res.write("<h1>Hello Node!</h1>"); //sending the content
  res.end();
});
