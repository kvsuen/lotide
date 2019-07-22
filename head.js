// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let message = "";
  //template literals (aka template strings)
  actual === expected ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

const head = function(array) {
  return array[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1,2,3]), 1);
assertEqual(head("Hi"), "H");
assertEqual(head([]), undefined);