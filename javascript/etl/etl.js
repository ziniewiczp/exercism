export const transform = (old) => {
  const expected = {};

  for(let row in old) {
    for(let letter of old[row]) {
      expected[letter.toLowerCase()] = +row;
    }
  }

  return expected;
};
