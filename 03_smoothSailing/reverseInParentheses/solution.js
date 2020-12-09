function reverseInParentheses(inputString) {
    inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    if(inputString.includes('(')) return reverseInParentheses(inputString)
    return inputString
}
