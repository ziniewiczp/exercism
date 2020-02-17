export const compute = (left, right) => {
  if(left === "" && right !== "") { 
    throw new Error("left strand must not be empty");
  }

  if(right === "" && left !== "") {
    throw new Error("right strand must not be empty");
  }

  if(left.length !== right.length) { 
    throw new Error("left and right strands must be of equal length");
  }

  return [...left].reduce((difference, current, index) => {
    return difference + ((current !== right.charAt(index)) ? 1 : 0);
  }, 0);
};
