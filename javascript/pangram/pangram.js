export const isPangram = (input) => {
  const usedLetters = new Set();

  for(let character of input) {
    if(character.toUpperCase() !== character.toLowerCase())
      usedLetters.add(character.toLowerCase());
  }

  return (usedLetters.size === 26) ? true : false;
};
