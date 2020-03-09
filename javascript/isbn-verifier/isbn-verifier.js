export const isValid = (input) => {
  const splitted = input.replace(/-/g, "").split("");
  if(splitted.length !== 10) { return false; }
  splitted[9] = (splitted[9] === "X") ? 10 : splitted[9];

  return splitted
    .reduce((acc, current, index) => acc + Number(current) * (10 - index), 0)
    % 11 === 0;
}