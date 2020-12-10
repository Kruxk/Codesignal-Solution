function variableName(name) {
    return name.match(/[a-zA-Z_]+([a-zA-Z0-9_]*)/g).join('').length === name.length
}