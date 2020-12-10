function longestWord(text) {
    return text.match(/[a-zA-Z]+/g).reduce((acc, curr) => {
        if(curr.length > acc.length) return curr
        return acc
    }, '')
}