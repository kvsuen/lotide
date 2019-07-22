// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let message = "";
  //template literals (aka template strings)
  actual === expected ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("One", "One");
assertEqual("Hundred", "twenty");
assertEqual(52, 52);
assertEqual(10, 30);
assertEqual("1", 1);