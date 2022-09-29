const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Nice work,mafeifei!!!");
});

app.get("demo", (req, res) => {
  res.set("X-ful-stack", "4life");
  res.status(418);
  res.send("I profer coffee");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
