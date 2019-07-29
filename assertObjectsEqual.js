const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let message = "";
  eqObjects(actual, expected) ? message = `✔✔✔ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"` :
    message = `✖✖✖ Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`;

  return console.log(message);
};

module.exports = assertObjectsEqual;

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);