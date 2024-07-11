const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async cityCreate(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);

      return city;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityCreate.getCity(cityId);
      return city;
    } catch (error) {
      console.log(error.message);
    }
  }
}
