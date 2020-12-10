function differentSquares(matrix) {
    const sqaureToString = (sqaure) => {
        return `${sqaure.join('')}`
    }
    
    const sqaures = matrix.reduce((acc, curr, i) => {
        if(i === matrix.length - 1) return acc
        return [...acc, ...curr.reduce((row, cell, j) => {
            if(j === matrix[0].length - 1) return row
            const tmp = [matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]]
            return [...row, sqaureToString(tmp)]
        }, [])]
    }, [])
     
    return new Set(sqaures).size
}