function addBorder(picture) {
    return picture.reduce((acc, curr, i) => {
        if(picture.length === 1) return [stars(curr.length + 2), addStarsToString(curr), stars(curr.length + 2)]
        if(i === 0) return [stars(curr.length + 2), addStarsToString(curr)]
        if(i === picture.length - 1) return [...acc, addStarsToString(curr), stars(curr.length + 2)]
        return [...acc, addStarsToString(curr)]
    }, [])
}

function stars(length, string = ``) {
    if(length === 0) return string
    return stars(length - 1, `${string}*`)
}

function addStarsToString(string) {
    return `*${string}*`
}