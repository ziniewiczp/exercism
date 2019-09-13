const comparisonMap = new Map([
    ["earth",   1],
    ["mercury", 0.2408467],
    ["venus",   0.61519726],
    ["mars",    1.8808158],
    ["jupiter", 11.862615],
    ["saturn",  29.447498],
    ["uranus",  84.016846],
    ["neptune", 164.79132]
]);

export const age = (planet, seconds) => {
    validateInput(planet, seconds);
    const yearsOnEarth = seconds / 31557600;
    const yearsOnPlanet = yearsOnEarth / comparisonMap.get(planet);
    return Number(yearsOnPlanet.toFixed(2));
}

const validateInput = (planet, seconds) => {
    if(!comparisonMap.has(planet))
        throw new Error(`There's no such planet as ${planet}!`);

    if(isNaN(seconds))
        throw new Error("Second argument should be a number!");
}