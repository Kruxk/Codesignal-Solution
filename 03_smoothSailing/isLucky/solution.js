function isLucky(n) {
    const stringified = n.toString()
    const firstHalf = stringified
                        .slice(0, stringified.length / 2)
                        .split('')
                        .reduce((acc, curr) => parseInt(curr) + acc, 0)
    const secHalf = stringified
                        .slice(stringified.length / 2, stringified.length)
                        .split('')
                        .reduce((acc, curr) => parseInt(curr) + acc, 0)
            
    return firstHalf === secHalf
}