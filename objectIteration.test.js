const {
  getCityPopulation,
  isPopulationAboveThreshold,
  addCity,
  countCitiesInCountry,
} = require("./objectIteration.js");

describe("City Data Functions", () => {
  let cities;

  beforeEach(() => {
    cities = [
      {
        id: 301,
        name: "New York",
        population: 8398748,
        country: "United States",
      },
      { id: 302, name: "Paris", population: 2140526, country: "France" },
      { id: 303, name: "Tokyo", population: 13960000, country: "Japan" },
      { id: 304, name: "Sydney", population: 5230330, country: "Australia" },
      { id: 305, name: "Cairo", population: 9121515, country: "Egypt" },
    ];
  });

  describe("getCityPopulation", () => {
    it("should return the population of the city", () => {
      expect(getCityPopulation(cities[0])).toBe(8398748);
    });
  });

  describe("isPopulationAboveThreshold", () => {
    it("should return true if the city's population is above the threshold", () => {
      expect(isPopulationAboveThreshold(cities[1], 2000000)).toBe(true);
    });
    it("should return false if the city's population is below the threshold", () => {
      expect(isPopulationAboveThreshold(cities[1], 3000000)).toBe(false);
    });
  });

  describe("addCity", () => {
    it("should add a new city to the array and return the updated array", () => {
      const newCity = {
        id: 306,
        name: "Vancouver",
        population: 1200000,
        country: "Canada",
      };
      const updatedCities = addCity([...cities], newCity);
      expect(updatedCities).toContainEqual(newCity);
      expect(updatedCities.length).toBe(cities.length + 1);
    });
  });

  describe("countCitiesInCountry", () => {
    it("should return the number of cities in the specified country", () => {
      expect(countCitiesInCountry(cities, "France")).toBe(1);
      expect(countCitiesInCountry(cities, "Japan")).toBe(1);
    });
    it("should return 0 if no cities are found in the specified country", () => {
      expect(countCitiesInCountry(cities, "Germany")).toBe(0);
    });
  });
});
