function chessKnight(cell) {
    const board = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8}
    let moves = 0
    if(board[cell[0]] - 2 >= 1) {
        if(parseInt(cell[1]) + 1 <= 8) moves++
        if(parseInt(cell[1]) - 1 >= 1) moves++
    }
    if(board[cell[0]] + 2 <= 8) {
        if(parseInt(cell[1]) + 1 <= 8) moves++
        if(parseInt(cell[1]) - 1 >= 1) moves++
    }
    if(parseInt(cell[1]) + 2 <= 8) {
        if(board[cell[0]] + 1 <= 8) moves++
        if(board[cell[0]] - 1 >= 1) moves++
    }
    if(parseInt(cell[1]) - 2 >= 1) {
        if(board[cell[0]] + 1 <= 8) moves++
        if(board[cell[0]] - 1 >= 1) moves++
    }
    return moves
}