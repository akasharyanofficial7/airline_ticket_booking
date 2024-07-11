const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const CityRepository = require("./repository/city-repository.js");
const { City } = require("./models/index.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { PORT } = require("./config/configServer");

app.listen(PORT, async () => {
  console.log(` the port is ${PORT}`);

  const cityRepo = new CityRepository();
  cityRepo.getCity(50);
  console.log(cityRepo);
});
