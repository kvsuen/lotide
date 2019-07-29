const chai = require('chai');
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it('should return {Jason: 1, Fang: 2} for input of { "Jason": true, "Karima": true, "Fang": true }', () => {
    chai.expect(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })).to.eql({Jason: 1, Fang: 2});
  });
  it('should return {} for input of { "Jason": false, "Karima": false, "Fang": false }', () => {
    chai.expect(countOnly(firstNames, { "Jason": false, "Karima": false, "Fang": false })).to.eql({});
  });
});



