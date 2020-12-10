function isIPv4Address(inputString) {
    return inputString.split('.')
    .reduce((acc, curr, i, arr) => {
        if(!acc) return acc
        if(arr.length !== 4) return false
        if(curr.length > 1 && parseInt(curr.charAt(0)) === 0) return false
        if(parseInt(curr) != curr) return false
        if(curr >= 0 && curr <= 255) return true
        return false
    }, true)
}