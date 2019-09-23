export class Matrix {
    constructor(matrix) {
        this.rows = matrix.split("\n").map(row => row.split(" ").map(Number));
        this.columns = this.rows[0].map((_, index) => this.rows.map(row => row[index]));
    }
}