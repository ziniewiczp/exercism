const appendEncodedChar = (count, char) => {
  let result = '';
  if (count > 1) result += count;
  return result + char;
};

export const encode = (string) => {
  if (string === '') return string;

  let encodedString = '';
  let counter = 0;
  let currentChar = string[0];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== currentChar) {
      encodedString += appendEncodedChar(counter, currentChar);
      currentChar = string[i];
      counter = 1;
    } else {
      counter += 1;
    }
  }

  return encodedString + appendEncodedChar(counter, currentChar);
};

export const decode = (string) => {
  if (string === '') return string;

  let decodedString = '';
  let occurences = '';

  for (let i = 0; i < string.length; i += 1) {
    if (Number.isNaN(parseInt(string[i], 10))) {
      do {
        decodedString += string[i];
        occurences -= 1;
      } while (occurences > 0);

      occurences = '';
    } else {
      occurences += string[i];
    }
  }

  return decodedString;
};
