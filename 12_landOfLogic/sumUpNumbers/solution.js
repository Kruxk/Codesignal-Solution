function sumUpNumbers(inputString) {
    const matches = inputString.match(/\d+/g)
    if(!matches) return 0
    return matches.reduce((a, c) => a + parseInt(c), 0)
}