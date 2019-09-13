export const steps = n => {
    if (n < 1) 
        throw new Error('Only positive numbers are allowed');

    let counter = 0;

    while(n != 1) {
        n = (n % 2 === 0) ? (n / 2) : (3*n + 1);
        counter += 1;
    }

    return counter;
}