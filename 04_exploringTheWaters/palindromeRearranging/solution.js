function palindromeRearranging(inputString) {
    const unique = new Set(inputString)
    const getLengths = []
    unique.forEach(el => getLengths.push(inputString.split('').filter(x => x === el).length))
        
    return getLengths.filter(el => el % 2 === 1).length < 2
}