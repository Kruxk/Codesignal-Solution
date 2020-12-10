function sudoku(grid) {
    const checkGrid = grid => grid.reduce((acc, row, i) => acc ? row.reduce((acc, cell, j) => {
        if(!acc) return acc
        const check = row.filter((_, x) => x !== j)
        return !check.includes(cell)
    }, true) : acc, true)
    
    const shiftGrid = matrix => matrix.map((row, i) => row.map((_, j) => {
        return matrix[matrix.length - 1 - j][i]
    }))
    
    const idx = [0,1,2]
    const sqaures = [];
    for(let i=0; i<9; i+=3){
        for(let j=0; j<9; j+=3){
            const tmp = []
            idx.forEach(e => {
                idx.forEach(f => {
                tmp.push(grid[i+e][j+f]);
                })
            sqaures.push(tmp) 
            })
        }
    }
    
    return checkGrid(grid) && checkGrid(shiftGrid(grid)) && checkGrid(sqaures)
}