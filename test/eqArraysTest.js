const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe("#eqArrays", () => {
  it("returns true for input of [1, 2, 3] for [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("returns true for input of 'Hi' and 'Hi'", () => {
    assert.isTrue(eqArrays(['Hi'], ['Hi']));
  });
  it("returns true for empty inputs'", () => {
    assert.isTrue(eqArrays([], []));
  });
  it("returns false for [1,2,3] and [1,2,'3']", () => {
    assert.isFalse(eqArrays([[1,2,3]], [[1,2,'3']]));
  });
  it("returns false for [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

});