const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual(["Hello", "Lighthouse", "Labs"], ["Hello", "Lighthouse", "Labs"]);
assertArraysEqual("Hi","Hi");
assertArraysEqual([5], [5]);
assertArraysEqual([], []);

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);