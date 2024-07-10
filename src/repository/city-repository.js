const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log(error.message);
    }
  }

  async updateCity(cityId, newName) {
    try {
      const city = await City.update(
        { name: newName },

        {
          where: {
            id: cityId,
          },
        }
      );

      return city;
    } catch (error) {
      console.log(error.message);
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });

      return true;
    } catch (error) {
      console.log(" problem created to delete city");
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Error fetching city:", error.message);
      throw error;
    }
  }
}

module.exports = CityRepository;
