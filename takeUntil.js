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

const takeUntil = function(array, callback) {
  const result = [];
  for (const iterator of array) {
    if (!callback(iterator)) {
      result.push(iterator);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1,2,5,7,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);