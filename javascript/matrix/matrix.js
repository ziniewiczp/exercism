export class Matrix {
    constructor(matrix) {
        this.rows = new Array();
        this.columns = new Array();
        
        matrix.split("\n").map(row => {
            this.rows.push(row.split(" ").map(Number));

            row.split(" ").map((item, index) => {
                if(this.columns.length < index + 1)
                    this.columns.push(new Array());

                this.columns[index].push(+item);
            });
        });
    }
}
