export const annotate = (board) => {
    for(let i = 0; i < board.length; i += 1) {
        board[i] = board[i].split('');
        
        for(let j = 0; j < board[i].length; j += 1) {
            if(board[i][j] !== '*') {
                let counter = checkNeighbourhood(i, j, board);
                if (counter > 0) {
                    board[i][j] = counter;
                }
            }
        }

        board[i] = board[i].join('');
    }

    return board;
}

const checkNeighbourhood = (x, y, board) => {
    let counter = 0;

    for(let m = -1; m < 2; m += 1) {
        for(let n = -1; n < 2; n += 1) {
            if(isOutOfBounds(x + m, y + n, board)) {
                continue;
            }

            if(board[x + m][y + n] === '*') {
                counter += 1;
            }
        }
    }

    return counter;
}

const isOutOfBounds = (x, y, board) => {
   return x < 0 || y < 0 || x >= board.length || y >= board[x].length;
}