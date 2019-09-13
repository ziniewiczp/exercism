export class Triangle {

    constructor(a, b, c) {
        // by default sort() treat elements as strings
        this.sides = [a, b, c].sort((x, y) => x - y);
    }

    kind() {
        if(this.sides[0] <= 0)
            throw "Sides must be greater than 0!";

        if(this.sides[0] + this.sides[1] < this.sides[2])
            throw "Provided lenghts are violating triangle inequality!";

        if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2])
            return 'equilateral';

        if (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2])
            return 'isosceles';

        return 'scalene';
    }
}