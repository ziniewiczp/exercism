export const isValid = (code) => {
  code = format(code);
  code = handleCheckChar(code);
  if(!validate(code)) { return false; };

  const result = code.reduce((acc, current, index) => {
    return acc + Number(current) * (10 - index);
  }, 0);

  return result % 11 === 0;
};

const format = (input) => {
  return input
    .replace(/-/g, "")
    .replace(/\s/g, "")
    .split("");
}

const handleCheckChar = (input) => {
  const checkChar = input.pop();
  input.push((checkChar === "X") ? 10 : checkChar);
  return input;
}

const validate = (input) => {
  return input.length === 10 && !input.some(item => isNaN(item));
}
