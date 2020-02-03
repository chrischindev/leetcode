let telephoneMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};
debugger;
let letterCombinations = function(digits) {
  let result = [];
  if (digits.length === 0) {
    return [];
  }
  let subResult = letterCombinations(digits.slice(1));
  let firstDigitLetters = telephoneMap[digits[0]];
  for (let i = 0; i < firstDigitLetters.length; ++i) {
    if (subResult.length > 0) {
      for (let j = 0; j < subResult.length; ++j) {
        result.push(firstDigitLetters[i] + subResult[j]);
      }
    }
  }
  return result;
};

letterCombinations("23");
