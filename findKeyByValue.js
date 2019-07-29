const findKeyByValue = (objectData, valueOfKeyToFind) => {
  let result = undefined;

  for (const key in objectData) {
    if (objectData.hasOwnProperty(key)) {
      if (objectData[key] === valueOfKeyToFind) {
        result = key;
      }
    }
  }

  return result;
};

module.exports = findKeyByValue;