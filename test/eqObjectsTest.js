
const chai = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  
  it('should return true as input objects are the same', () => {
    chai.assert.isTrue(eqObjects(ab, ba));
  });
  it('should return false as input objects are different', () => {
    chai.assert.isFalse(eqObjects(ab, abc));
  });
  it('should return true as input objects are the same', () => {
    chai.assert.isTrue(eqObjects(cd, dc));
  });
  it('should return false as input objects are different', () => {
    chai.assert.isFalse(eqObjects(cd, cd2));
  });
  it('should return false as input objects are different', () => {
    chai.assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it('should return false as input objects are different', () => {
    chai.assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  });
  it('should return false as input objects are different', () => {
    chai.assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 4 }));
  });
  it('should return true as input objects are the same', () => {
    chai.assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
});

