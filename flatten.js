const flatten = function(array) {
  let flattenedArray = [];

  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      for (const elem of array[index]) {
        flattenedArray.push(elem);
      }
    } else {
      flattenedArray.push(array[index]);
    }
  }

  return flattenedArray;
};

module.exports = flatten;