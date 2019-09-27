const letterValues = new Map([
  ["Z", 10], ["Q", 10],
  ["X", 8], ["J", 8],
  ["K", 5],
  ["F", 4], ["H", 4], ["V", 4], ["W", 4], ["Y", 4],
  ["B", 3], ["C", 3], ["M", 3], ["P", 3],
  ["D", 2], ["G", 2]
]);

export const score = (word) => {
  return [...word.toUpperCase()].reduce((sum, current) => {
    return sum + (letterValues.get(current) || 1);
  }, 0);
};
