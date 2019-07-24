const assertEqual = function(actual, expected) {
  let message = "";
  //template literals (aka template strings)
  actual === expected ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

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


// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestMoviesByGenre = {
  action: "End Game",
  comedy: "22 Jump Street",
  drama:  "Hateful Eight"
};

assertEqual(findKeyByValue(bestMoviesByGenre, "End Game"), "action");
assertEqual(findKeyByValue(bestMoviesByGenre, "22 Jump Street"), "comedy");
assertEqual(findKeyByValue(bestMoviesByGenre, "Hateful Eight"), "drama");