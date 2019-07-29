const tail = require('../tail');
const chai = require('chai');

describe("#tail", () => {
  it("returns an empty array [] if the input is empty", () => {
    chai.expect(tail([])).to.eql([]);
  });

  it("returns [] if the input is [1]", () => {
    chai.expect(tail([1])).to.eql([]);
  });

  it("returns [2] if the input is [1, 2]", () => {
    chai.expect(tail([1, 2])).to.eql([2]);
  });
  it("returns [2, 3, 4] if the input is [1, 2, 3, 4]", () => {
    chai.expect(tail([1, 2, 3, 4])).to.eql([2, 3, 4]);
  });
  it("returns ['e','y'] if the input is 'Hey'", () => {
    chai.expect(tail('Hey')).to.eql(['e','y']);
  });
});