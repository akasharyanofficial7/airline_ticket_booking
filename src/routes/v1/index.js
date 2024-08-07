const express = require("express");
const CityController = require("../../Controllers/city-controller");
const router = express.Router();
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.get("/city/:id", CityController.get);
module.exports = router;
