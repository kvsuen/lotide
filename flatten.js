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

const assertArraysEqual = function(actual, expected) {
  let message = "";
  eqArrays(actual, expected) ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

const flatten = function(array) {
  let flattenedArray = [];

  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      for (const elem of array[index]) {
        flattenedArray.push(elem);
      }
    } else {
      flattenedArray.push(array[index]);
    }
  }

  return flattenedArray;
};

module.exports = flatten;

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([1,2,3,[1,3,2]]), [1,2,3,1,3,2]);
assertArraysEqual(flatten([[1,2],1,2,3,4,5,6]), [1,2,1,2,3,4,5,6]);
assertArraysEqual(flatten([["Hello","World"], "Lighthouse", "Labs"]), ["Hello","World","Lighthouse","Labs"]);
assertArraysEqual(flatten("Hi"), ["H","i"]);
assertArraysEqual(flatten([5]), [5]);
assertArraysEqual(flatten([]), []);
assertArraysEqual(flatten([1,2]), [1,2]);
assertArraysEqual(flatten(["1", "2", "3"]), ["1","2","3"]);