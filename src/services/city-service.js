const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async cityCreate(data) {
    try {
      const city = this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteCity(cityId) {
    try {
      const response = this.cityRepository.error(cityId);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = this.cityRepository.updateCity(cityId, data);

      return city;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getCity(cityId) {
    try {
      const city = this.cityCreate.getCity(cityId);
      return city;
    } catch (error) {
      console.log(error.message);
    }
  }
}
