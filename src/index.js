const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ApiRoutes = require("./routes/index");
const CityRepository = require("./repository/city-repository.js");
// const { City, Airport } = require("./models/index.js");
const db = require("./models/index.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", ApiRoutes);
const { PORT } = require("./config/configServer");

app.listen(PORT, async () => {
  console.log(` the port is ${PORT}`);

  // const cityRepo = new CityRepository();
  // cityRepo.getCity(50);
  // console.log(cityRepo);

  // const airports = await City.findAll();
  // console.log(airports);

  if (process.env.SYNC_DB) {
    db.sequelize.sync({ alter: true });
  }
});
