const romanMapping = [
    [1000,  'M'],
    [900,   'CM'],
    [500,   'D'],
    [400,   'CD'],
    [100,   'C'],
    [90,    'XC'],
    [50,    'L'],
    [40,    'XL'],
    [10,    'X'],
    [9,     'IX'],
    [5,     'V'],
    [4,     'IV'],
    [1,     'I']
];

export const toRoman = number => {
    let roman = '';
    romanMapping.forEach(mapping => {
        while(number >= mapping[0]) {
            roman += mapping[1];
            number -= mapping[0];
        }
    });

    return roman;
}
