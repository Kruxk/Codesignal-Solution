function commonCharacterCount(s1, s2) {
    const arr1 = s1.split('')
    const arr2 = s2.split('')
    
    return arr1.reduce((acc, curr) => {
        if(arr2.includes(curr)) {
            const index = arr2.indexOf(curr)
            arr2.splice(index, 1)
            return acc + 1
        }
        return acc
    }, 0)
}
