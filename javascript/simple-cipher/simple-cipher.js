const ALPHABET = new Array(122 - 96).fill("a").map((_, index) => String.fromCharCode(index + 97));

export class Cipher {
  constructor(key = generateKey()) {
    this.key = key;
  }

  encode(text) {
    return applyCipher(text, this.key, modes.ENCODE);
  }

  decode(text) {
    return applyCipher(text, this.key, modes.DECODE);
  }
}

const generateKey = () => {
  const key = new Array(100).fill("a");
  return key.map(_ => getRandomLetter()).join("");
}

const getRandomLetter = () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

const modes = {
  ENCODE: 1,
  DECODE : -1
}

const applyCipher = (text, key, mode) => {
  while(key.length < text.length) {
    key += key;
  }

  return text.split("").map((letter, index) => {
    const difference = ALPHABET.indexOf(key[index]) * mode;
    const encodedIndex = mod(ALPHABET.indexOf(letter) + difference, ALPHABET.length);
    return ALPHABET[encodedIndex];
  }).join("");
}

const mod = (index, range) => {
  const remainder = index % range;
  return (remainder < 0) ? range + remainder : remainder;
}