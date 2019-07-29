const middle = require('../middle');
const chai = require('chai');

describe('#middle', () => {
  it('should return [2] for input of [1,2,3]', () => {
    chai.expect(middle([1,2,3])).to.eql([2]);
  });
  it('should return [2, 3] for input of [1,2,3,4]', () => {
    chai.expect(middle([1,2,3,4])).to.eql([2,3]);
  });
  it('should return [] for an empty input', () => {
    chai.expect(middle([])).to.eql([]);
  });
  it('should return [] for an array of length 2 or less', () => {
    chai.expect(middle([1,2])).to.eql([]);
  });
});