export class Robot {    
    constructor() {
        this.reset();
    }
    
    reset() {
        this._name = generateName();
    }

    get name() {
        return this._name;
    }
}

const usedNames = new Set();

Robot.releaseNames = () => usedNames.clear();

const generateName = () => {
    let name;

    do {
        name = [
            getRandomLetter(),
            getRandomLetter(),
            getRandomDigit(),
            getRandomDigit(),
            getRandomDigit()
        ].join("");
    } while(usedNames.has(name));

    usedNames.add(name);
    return name;
}

const getRandomLetter = () => {
    const ascii = Math.floor(Math.random() * (90 - 64)) + 65;
    return String.fromCharCode(ascii);
}

const getRandomDigit = () => Math.floor(Math.random() * 10);
