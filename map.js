const assertArraysEqual = function(actual, expected) {
  let message = "";
  eqArrays(actual, expected) ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const test = [1,2,3,4,5];
assertArraysEqual(test.map(elem => elem * 2), [2,4,6,8,10]);

const test2 = [1,2,3,4,5];
assertArraysEqual(test2.map(() => ""), ['','','','','']);