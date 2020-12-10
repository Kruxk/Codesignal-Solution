function alternatingSums(a) {
    const teams = a.reduce((acc, curr, i) => {
        if(i % 2 === 0) {
            acc[0].push(curr)
            return acc
        }
        acc[1].push(curr)
        return acc
    }, [[0], [0]])
    
    return teams.map(el => el.reduce((acc, curr) => acc + curr), 0)
}
