const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { PORT } = require("./config/configServer");

console.log("  hello hi l.glyvkydcjycyj  hvhgv ");
app.listen(PORT, () => {
  console.log(` the port is ${PORT}`);
});
