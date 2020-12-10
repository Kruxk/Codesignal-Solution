function evenDigitsOnly(n) {
    return n.toString().split('').reduce((acc, curr) => {
        if(!acc) return false
        return (parseInt(curr) % 2) === 0
    }, true)
}