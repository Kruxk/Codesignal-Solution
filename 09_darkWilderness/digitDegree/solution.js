function digitDegree(n) {
    const charArray = n.toString().split('');
    const sum = charArray.reduce((acc, curr) => acc + parseInt(curr), 0)
    if (charArray.length === 1) return 0
    return 1 + digitDegree(sum)
}
