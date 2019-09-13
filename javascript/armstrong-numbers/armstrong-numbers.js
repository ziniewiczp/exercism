export const validate = inputNumber => {
  if (inputNumber < 10) {
    return true;

  } else if (inputNumber < 100) {
    return false;
    
  } else {
    let input = inputNumber.toString();
    let sum = 0;

    for (let i = 0; i < input.length; i += 1) {
      sum += Math.pow(input[i], input.length);
    }

    return sum == input ? true : false;
  }
};
