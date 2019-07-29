const middle = function(array) {
  let middleArray = [];
  const middleIndex = Math.floor(array.length / 2);

  if (array.length > 2 && array.length % 2 === 0) {
    middleArray = array.slice(middleIndex - 1, middleIndex + 1);
  } else if (array.length > 2) {
    middleArray = array.slice(middleIndex, middleIndex + 1);
  }

  return middleArray;
};

module.exports = middle;