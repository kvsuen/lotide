const chai = require('chai');
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return [1,2,3,4,5,6] for input of [1, 2, [3, 4], 5, [6]]', () => {
    chai.expect(flatten([1, 2, [3, 4], 5, [6]])).to.eql([1,2,3,4,5,6]);
  });
  it('should return [] for empty input', () => {
    chai.expect(flatten([])).to.eql([]);
  });
  it('should return [1,2] for [1,2]', () => {
    chai.expect(flatten([1,2])).to.eql([1,2]);
  });
  it('should return [1,2,3,[3,4]] for [1,2,[3,[3,4]]]', () => {
    chai.expect(flatten([1,2,[3,[3,4]]])).to.eql([1,2,3,[3,4]]);
  });
});