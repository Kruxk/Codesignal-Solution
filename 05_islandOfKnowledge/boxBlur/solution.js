function boxBlur(image) {
    const blur = (col) => col.reduce((col, row) => 
        col + row.reduce((row, cell) => row + cell)
    , 0) / 9
    
    return [...image.keys()].filter(el => el + 3 <= image.length).map((col) => {
            const row = [...image[0].keys()].filter(el => el + 3 <= image[0].length)
            return row.map(el => {
                const matrix = [[image[col][el], image[col][el+1], image[col][el+2]],
                                [image[col+1][el], image[col+1][el+1], image[col+1][el+2]],
                                [image[col+2][el], image[col+2][el+1], image[col+2][el+2]]]    
                return Math.floor(blur(matrix))             
            })            
        })
}