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