export const transform = (old) => {
  return Object.entries(old).reduce((expected, [score, letters]) => {
    letters.forEach(letter => {
      expected[letter.toLowerCase()] = +score;
    });

    return expected;
  }, {});
}
