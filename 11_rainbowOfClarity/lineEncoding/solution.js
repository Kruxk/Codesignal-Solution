function lineEncoding(s) {
    return s.replace(/(.)\1+/g, (found) => `${found.length}${found[0]}`)
}