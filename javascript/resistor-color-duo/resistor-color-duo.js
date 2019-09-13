export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
];

export const value = ([first, second]) => {
    return COLORS.indexOf(first) * 10 + COLORS.indexOf(second);
}