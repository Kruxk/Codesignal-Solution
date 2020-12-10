function alphabeticShift(inputString) {
    return inputString.split('').map(char => {
        const code = char.charCodeAt(0)
        if(code === 122) return String.fromCharCode(97)
        if(code === 90) return String.fromCharCode(65)
        return String.fromCharCode(code + 1)
    }).join('')
}