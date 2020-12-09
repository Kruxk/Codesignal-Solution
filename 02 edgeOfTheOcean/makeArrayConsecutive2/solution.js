function makeArrayConsecutive2(statues) {
    const sorted = statues.sort((a, b) => a - b)
    return sorted.reduce((total, curr, i) => {
        if(sorted[i + 1] - curr === 1 || i === sorted.length - 1) return total
        return total + (sorted[i+1] - curr - 1)
    }, 0)
}
