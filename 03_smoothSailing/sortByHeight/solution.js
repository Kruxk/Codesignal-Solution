function sortByHeight(a) {
    const sortedHeights = a.filter(el => el !== -1).sort((a, b) => a - b)
    return a.map(el => {
        if(el === -1) return el
        return sortedHeights.shift()
    })
}
