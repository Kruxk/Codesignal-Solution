function arrayMaximalAdjacentDifference(inputArray) {
    return inputArray.reduce((acc, curr, i) => {
        if(i === 0) return Math.abs(curr - inputArray[i + 1])
        const differences = [Math.abs(curr - inputArray[i - 1]), Math.abs(curr - inputArray[i + 1])]
                            .filter(el => el > acc)
        if(differences.length !== 0) return Math.max(...differences)
        return acc
    }, 0)
}