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

const getRandomLetter = () => {
  const ascii = Math.floor(Math.random() * (122 - 96)) + 97;
  return String.fromCharCode(ascii);
}

const modes = {
  ENCODE: 1,
  DECODE : -1
}

const applyCipher = (text, key, mode) => {
  while(key.length < text.length) {
    key += key;
  }

  return text.split("").map((letter, index) => {
    let difference = key[index].charCodeAt() - 97;

    let encoded = letter.charCodeAt() + (difference * mode);
    if(encoded > 122) {
      encoded = 96 + (encoded - 122);
    }

    if(encoded < 97) {
      encoded = 123 - (97 - encoded);
    }

    return String.fromCharCode(encoded);
  }).join("");
}