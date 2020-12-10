function absoluteValuesSumMinimization(a) {
    return a.reduce((acc, curr) => {
        const temp = a.reduce((total, val) => total + Math.abs(val - curr), 0)
        if(temp < acc[1] || acc[1] === 0) return [curr, temp]
        return acc
    }, [0, 0])[0]
}