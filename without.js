const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let filteredArray = source;

  for (const removeElem of itemsToRemove) {
    while (filteredArray.includes(removeElem)) {
      filteredArray.splice(filteredArray.indexOf(removeElem), 1);
    }
  }

  return filteredArray;
};

module.exports = without;

// TEST CODE
assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without([1,2,3], [1,2]), [3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

assertArraysEqual(without(([1,2,3,4]), [2,3]), [1,4]);
assertArraysEqual(without((["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]), ["Hello", "Labs"]);
assertArraysEqual(without(([5]), []), [5]);
assertArraysEqual(without(([]), []), []);
assertArraysEqual(without((["1", "2", "3"]), ["2"]), ["1","3"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);