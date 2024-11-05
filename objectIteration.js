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

// 1) Write a `getCityPopulation` function that accepts `city` object argument, return the population of that city
function getCityPopulation(city) {
  // write your code here...
}
// console.log(getCityPopulation(cities[0])); // Outputs: 8398748

// 2) Write a `isPopulationAboveThreshold` function that accepts the following arguments `city` object and `threshold` number, return true if the city's population is greater than or equal to the threshold, otherwise returns false
function isPopulationAboveThreshold(city, threshold) {
  // write your code here...
}
// console.log(isPopulationAboveThreshold(cities[1], 2000000)); // Outputs: true

// 3) Write a `addCity` function that accepts the following argument, an array of city object `cities` and the properties of a city (id, name, population, and country).
// Create a new city object and add it to the end of the array.
// Return the updated array of cities
function addCity(cities, id, name, population, country) {
  // write your code here...
}
// console.log(addCity(cities, 306,  "Vancouver", 1200000,  "Canada" ));

// 4) Write a `countCitiesInCountry` function that accepts the following arguments, an array of city objects `cities` and `country` string, return the number of cities in the specified country
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
