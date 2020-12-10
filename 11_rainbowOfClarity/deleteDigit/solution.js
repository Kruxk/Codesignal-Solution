function deleteDigit(n) {
    const numString = n.toString().split('')
    return numString.reduce((max, curr, i) => {
            const tmp = numString.filter((el, j) => j !== i).join('')
            return Math.max(max, parseInt(tmp))
    }, 0)       
}