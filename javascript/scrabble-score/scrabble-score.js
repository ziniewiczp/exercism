const letterValues = new Map([
  ["Z", 10],
  ["Q", 10],
  ["X", 8],
  ["J", 8],
  ["K", 5],
  ["F", 4],
  ["H", 4],
  ["V", 4],
  ["W", 4],
  ["Y", 4],
  ["B", 3],
  ["C", 3],
  ["M", 3],
  ["P", 3],
  ["D", 2],
  ["G", 2]
]);

export const score = (word) => {
  return (word === "") ? 0 : word.split("").map(letter => {
    return (letterValues.get(letter.toUpperCase())) ? letterValues.get(letter.toUpperCase()) : 1;
  
  }).reduce((sum, current) => sum += current);
};
