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

const middle = function(array) {
  let middleArray = [];
  const middleIndex = Math.floor(array.length / 2);

  if (array.length > 2 && array.length % 2 === 0) {
    middleArray = array.slice(middleIndex - 1, middleIndex + 1);
  } else if (array.length > 2) {
    middleArray = array.slice(middleIndex, middleIndex + 1);
  }

  return middleArray;
};

// TEST CODE
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertArraysEqual(middle("Hi"), []);
assertArraysEqual(middle("Hello"), ["l"]);
assertArraysEqual(middle([5]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle(["1", "2", "3"]), ["2"]);
assertArraysEqual(middle(["1", "2", "3"]), [2]);