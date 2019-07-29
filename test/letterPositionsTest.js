const chai = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('should return {h: [0], e: [1], l: [2,3], o: [4]} for input of "hello"', () => {
    chai.expect(letterPositions('hello')).to.eql({h: [0], e: [1], l: [2,3], o: [4]});
  });
  it('should return {} for empty input', () => {
    chai.expect(letterPositions("")).to.eql({});
  });
  it('should return {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12]} for input of "lighthouse in the house"', () => {
    chai.expect(letterPositions('lighthouse in the house')).to.eql({
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12],
      ' ': [10,13,17]
    });
  });
});

