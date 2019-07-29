const assertEqual = function(actual, expected) {
  let message = "";
  //template literals (aka template strings)
  actual === expected ? message = `✔✔✔ Assertion Passed: "${actual}" === "${expected}"` :
    message = `✖✖✖ Assertion Failed: "${actual}" !== "${expected}"`;

  return console.log(message);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to coun
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (results[item] && itemsToCount[item]) {
      results[item] += 1;
    } else if (itemsToCount[item]) {
      results[item] = 1;
    }
  }
  
  return results;
};

module.exports = countOnly;

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);