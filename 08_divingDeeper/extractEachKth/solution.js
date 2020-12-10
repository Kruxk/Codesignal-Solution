function extractEachKth(inputArray, k) {
    return inputArray.filter((el, i) => {
        if(k > 1) {
            if (i === 0) return true
            return (i + 1) % k !== 0
        }
        return false
    })
}