export class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }

    get rows() {        
        const rows = new Array();
        if(this.matrix === "")
            return rows;
        
        rows.push(new Array());

        let index = 0;
        let current = "";

        for (let char of this.matrix) {
            if(char !== "\n" && char !== " ") {
                current += char;
            
            } else {
                rows[index].push(+current);
                current = "";

                if (char === "\n") {
                    index += 1;
                    rows.push(new Array());
                }
            }
        }

        rows[index].push(+current);

        return rows;
    }

    get columns() {
        const columns = new Array();
        if (this.matrix === "") 
            return columns;
            
        columns.push(new Array());

        let index = 0;
        let current = "";

        for(let char of this.matrix) {
            if(char !== " " && char !== "\n") {
                current += char;
            
            } else {
                columns[index].push(+current);
                current = ""; 

                if(char === " ") {
                    index += 1;
                    if(columns.length < index + 1) {
                        columns.push(new Array());
                    }
                
                } else {
                    index = 0;
                }
            }
        }

        columns[index].push(+current);

        return columns;
    }
}
