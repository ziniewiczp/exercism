export class QueenAttack {

    constructor(positioning = { white: [0, 3], black: [7, 3] }, width = 8, height = 8) {
        this.white = positioning.white;
        this.black = positioning.black;

        if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
            throw new Error("Queens cannot share the same space");
        }

        this.width = width;
        this.height = height;

        this.board = this.constructBoard();
    }

    constructBoard() {
        let board = [];

        for (let i = 0; i < this.height; i++) {
            let row = [];

            for(let j = 0; j < this.width; j++) {
                if (i === this.white[0] && j === this.white[1])
                    row.push('W');

                else if (i === this.black[0] && j === this.black[1])
                    row.push('B');

                else
                    row.push('_');
            }

            board.push(row);
        }

        return board;
    }

    toString() {
        for (let i = 0; i < this.height; i++) {
            this.board[i] = this.board[i].join(' ');
        }

        this.board[this.height - 1] += '\n';

        return this.board.join('\n');
    }

    canAttack() {
        if (this.white[0] === this.black[0])
            return true;

        if (this.white[1] === this.black[1])
            return true

        if (Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1]))
            return true;

        return false;
    }
}