const assertEqual = function(actual, expected) {
  let message = "";
  actual === expected ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) return false;
    }
  }
  return true;
};
  

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]), true);
assertEqual(eqArrays("Hi","Hi"), true);
assertEqual(eqArrays([5], [5]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1,2],[1]), false);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);