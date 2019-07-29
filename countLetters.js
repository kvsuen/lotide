const assertEqual = require('./assertEqual');

const removeSpaces = stringToRemoveSpaces => {
  const noSpaces = stringToRemoveSpaces.split(' ');
  const spacesRemoved = noSpaces.join('');

  return spacesRemoved;
};

const countLetters = stringToCount => {
  const noSpaces = removeSpaces(stringToCount);
  
  const results = {};

  for (const letter of noSpaces) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  
  return results;
};

module.exports = countLetters;

// TEST CODE
const result1 = countLetters('lighthouse in the house');

assertEqual(result1.l, 1);
assertEqual(result1.i, 2);
assertEqual(result1.g, 1);
assertEqual(result1.h, 4);
assertEqual(result1.t, 2);
assertEqual(result1.o, 2);
assertEqual(result1.u, 2);
assertEqual(result1.s, 2);
assertEqual(result1.e, 3);
assertEqual(result1.n, 1);

const result2 = countLetters('');

assertEqual(result2.l, undefined);
