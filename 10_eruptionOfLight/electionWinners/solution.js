function electionsWinners(votes, k) {
    const max = Math.max(...votes)
    if(k === 0 && votes.filter(el => el === max).length === 1) return 1
    return votes.reduce((result, vote) => {
           if (vote + k > max) return result + 1
           return result
    }, 0)
}