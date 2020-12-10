function arrayChange(inputArray) {
    const increasing = inputArray.reduce((acc, curr, i) => {
        if(i === 0) return {...acc, last: curr}
        const increased = acc.last + 1
        if(curr <= acc.last) return {moves: acc.moves + increased - curr, last: increased}
        return {...acc, last: curr}
    }, {moves: 0, last: 0})
    
    return increasing.moves
}