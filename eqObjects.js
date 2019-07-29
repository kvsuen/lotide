const eqArrays = require('./eqArrays')

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