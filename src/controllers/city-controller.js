const { CityService, CityService } = require("../services/index");
const cityService = new CityService();
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);

    return res.status(201).json({
      message: "successfully created City",
      success: true,
      err: {},
      data: city,
    });
  } catch (error) {
    return res.status(201).json({
      message: "failed to create city",
      success: false,
      err: error,
      data: {},
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(201).json({
      message: "successfully  deleted City",
      success: true,
      err: {},
      data: response,
    });
  } catch (error) {
    return res.status(201).json({
      message: " failed to  fetch city",
      success: false,
      err: error,
      data: {},
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(201).json({
      message: "successfully  deleted City",
      success: true,
      err: {},
      data: response,
    });
  } catch (error) {
    return res.status(201).json({
      message: " failed to  get city",
      success: false,
      err: error,
      data: {},
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      message: "successfully  update City",
      success: true,
      err: {},
      data: response,
    });
  } catch (error) {
    return res.status(201).json({
      message: " failed to  update city",
      success: false,
      err: error,
      data: {},
    });
  }
};
module.exports = {
  create,
  destroy,
  update,
  get,
};
