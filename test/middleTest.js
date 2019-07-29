const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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