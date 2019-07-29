const assertEqual = function(actual, expected) {
  let message = "";
  actual === expected ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const lengthObject1 = Object.keys(object1).length;
  const lengthObject2 = Object.keys(object2).length;

  if (lengthObject1 !== lengthObject2) {
    return false;
  }

  for (const key in object1) {
    if (object1.hasOwnProperty(key)) {
      // Check if the types of the 2 objects are of a primitive type, note this exludes objects as values
      if (typeof object1[key] !== "object" && typeof object2[key] !== "object") {
        // Do a primitive compare, and return false if the 2 values are different
        if (object1[key] !== object2[key])
          return false;
        // else if array, compare 2 arrays using eqArrays, if NOT EQUAL, then return false
      } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        //else if object, go into the nested array and repeat function (recursion)
      } else if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
  }
  
  return true;
};

module.exports = eqObjects;


// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 4 }), false);