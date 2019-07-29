const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let index = 0; index < array1.length; index++) {
      if (!Array.isArray(array1[index]) && !Array.isArray(array2[index])) {
        if (array1[index] !== array2[index]) {
          return false;
        }
      } else if (!eqArrays(array1[index], array2[index])) {
        return false;
      }
    }
  }
  return true;
};
  
module.exports = eqArrays;