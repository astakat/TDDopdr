// const addOne = function (numbers) {
//   const myArray = [31, 57, 12, 5];
//   const output = myArray.map((e) => e + 1);
//   console.log(output);
//   return output;
// };

// addOne();

// module.exports = addOne;

// const getWordLengths = function (someWords) {
//   return someWords.map((word) => word.length);
// };

// module.exports = getWordLengths;

const findNeedle = function (words, foundWord) {
  return words.indexOf(foundWord);
};

module.exports = findNeedle;
