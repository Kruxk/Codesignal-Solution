function buildPalindrome(st) {
    const build = (curr, tail = '') => {
        const reversed = curr.split('').reverse().join('');         if (reversed === curr) return `${st}${tail}`
        return build(curr.slice(1), `${curr[0]}${tail}`)
    }
    return build(st)    
}