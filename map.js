const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const test = [1,2,3,4,5];
assertArraysEqual(test.map(elem => elem * 2), [2,4,6,8,10]);

const test2 = [1,2,3,4,5];
assertArraysEqual(test2.map(() => ""), ['','','','','']);