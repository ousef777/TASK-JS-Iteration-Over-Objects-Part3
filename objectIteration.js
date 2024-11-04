const cities = [
  {
    id: 301,
    name: "New York",
    population: 8398748,
    country: "United States",
  },
  {
    id: 302,
    name: "Paris",
    population: 2140526,
    country: "France",
  },
  {
    id: 303,
    name: "Tokyo",
    population: 13960000,
    country: "Japan",
  },
  {
    id: 304,
    name: "Sydney",
    population: 5230330,
    country: "Australia",
  },
  {
    id: 305,
    name: "Cairo",
    population: 9121515,
    country: "Egypt",
  },
];

// 1) Using `getCityPopulation` function that accepts `city` object argument, return the population of that city
function getCityPopulation(city) {
  // write your code here...
}
// console.log(getCityPopulation(cities[0])); // Outputs: 8398748

// 2) Using `isPopulationAboveThreshold` function that accepts the following arguments `city` object and `threshold` number, return true if the city's population is greater than or equal to the threshold, otherwise returns false
function isPopulationAboveThreshold(city, threshold) {
  // write your code here...
}
// console.log(isPopulationAboveThreshold(cities[1], 2000000)); // Outputs: true

// 3) Using `addCity` function that accepts the following argument, an array of city object `cities` and a `city` object (with id, population, and country), add the new city to the end of the array and return the updated array of cities
function addCity(cities, city) {
  // write your code here...
}
// console.log(addCity(cities, { id: 306, name: "Vancouver", population: 1200000, country: "Canada" }));

// 4) Using `countCitiesInCountry` function that accepts the following arguments, an array of city object `cities` and `country` string, return the number of cities in the specified country
function countCitiesInCountry(cities, country) {
  // write your code here...
}
// console.log(countCitiesInCountry(cities, "France")); // Outputs: 1

module.exports = {
  getCityPopulation,
  isPopulationAboveThreshold,
  addCity,
  countCitiesInCountry,
};
