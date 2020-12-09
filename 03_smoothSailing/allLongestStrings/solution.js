function allLongestStrings(inputArray) {
    const longest = Math.max(...inputArray.map(el => el.length))
    return inputArray.filter(el => el.length === longest)
}