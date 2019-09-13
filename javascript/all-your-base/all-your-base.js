export const convert = (number, fromBase, toBase) => {
    if(!validateBase(fromBase)) throw new Error('Wrong input base');
    if(!validateBase(toBase)) throw new Error('Wrong output base');
    if(!validateNumber(number, fromBase)) throw new Error('Input has wrong format');

    let numberInDecimal = 0;
    for(let index = 0, power = number.length - 1; power >= 0; index++, power--) {
        numberInDecimal += number[index] * (fromBase ** power);
    }

    let numberInDesiredBase = [];
    do {
        numberInDesiredBase.unshift((numberInDecimal % toBase));
        numberInDecimal = Math.floor(numberInDecimal/toBase);
    } while (numberInDecimal > 0)

    return numberInDesiredBase;
}

const validateBase = (base) => {
    return base !== undefined && base > 1 && Number.isInteger(base);
}

const validateNumber = (number, base) => {
    const isEmpty = number.length === 0;
    const areLeadingZeros = number.length > 1 && number[0] === 0;
    const areDigitsInvalid = number.filter(digit => digit < 0 || digit >= base).length;

    return !isEmpty && !areLeadingZeros && !areDigitsInvalid;
}