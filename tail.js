// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let message = "";
  //template literals (aka template strings)
  actual === expected ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

const tail = function(array) {
  let tailArray = [];

  for (let index = 1; index < array.length; index++) {
    tailArray.push(array[index]);
  }

  return tailArray;
};

// TEST CODE
assertEqual(tail([5,6,7]).length, 2);
assertEqual(tail([5,6,7])[0], 6);
assertEqual(tail([5,6,7])[1], 7);

assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");

assertEqual(tail("Hi").length, 1);
assertEqual(tail("Hi")[0], "i");

assertEqual(tail([5]).length, 0);
assertEqual(tail([5])[0], undefined);

assertEqual(tail([]).length, 0);
assertEqual(tail([])[0], undefined);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!