function fileNaming(names) {
    const unique = new Set()
    
    for(let i = 0; i < names.length; i++) {
        if(!unique.has(names[i])) {
            unique.add(names[i])
            continue;
        }
        for(let j = 1; j <= names.length + 1; j++) {
            let name = names[i] + '(' + j.toString() + ')'
            if(unique.has(name)) {
                continue;
            }
            names[i] = name;
            unique.add(name)
            break; 
        }
    }
    return names
}