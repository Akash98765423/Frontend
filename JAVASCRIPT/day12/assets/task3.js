let cities = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"];

let removedCity = cities.shift();

cities.unshift("Coimbatore");

console.log("Removed City:", removedCity);
console.log("Final Array:", cities);