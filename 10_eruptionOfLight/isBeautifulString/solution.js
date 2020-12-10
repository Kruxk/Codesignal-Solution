function isBeautifulString(inputString) {
    const unique = [...new Set(inputString)].sort()
    const mapToLength = unique.map((el, i) => {
        return {charCode: el.charCodeAt(0) ,length: [...inputString.matchAll(el)].length}
    })
    console.log(mapToLength)
    
    return mapToLength.reduce((acc, curr, i) => {
        if(!acc) return acc
        if(curr.charCode === 97) return true
        const check = mapToLength.find(el => el.charCode === curr.charCode - 1)
        if(check && curr.length <= check.length) return true
        return false
    }, true)
}