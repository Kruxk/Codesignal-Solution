function minesweeper(matrix) {
    const getArea = (x, y, board) => {
        const area = []
        const dimensionX = board.length - 1;
        const dimensionY = board[0].length - 1
        
        if (x > 0) {
            area.push(board[x - 1][y]);
        }
    
        if (x < dimensionX) {
            area.push(board[x + 1][y]);
        }
        
        if (y > 0) {
            area.push(board[x][y - 1]);
        }
        
        if (y < dimensionY) {
            area.push(board[x][y + 1]);
        }
        
        if (x > 0 && y > 0) {
            area.push(board[x - 1][y - 1]);
        }
        
        if (x > 0 && y < dimensionY) {
            area.push(board[x - 1][y + 1]);
        }
        
        if (x < dimensionX && y < dimensionY) {
            area.push(board[x + 1][y + 1]);
        }
        
        if (x < dimensionX && y > 0) {
            area.push(board[x + 1][y - 1]);
        }
        return area;
    }
    return matrix.map((row, x) => row.map((cell, y) => getArea(x, y, matrix).filter(val => val).length))
}
