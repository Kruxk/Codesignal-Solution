function matrixElementsSum(matrix) {
    const ghosts = matrix[0];
    return matrix.reduce((totalCost, floor) => {
        return totalCost + floor.reduce((total, room, i) => {
            if(room === 0) ghosts[i] = 0;
            if(ghosts[i] !== 0) return total + room
            return total
        }, 0)
    }, 0)
}