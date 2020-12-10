function digitsProduct(product) {
    if(product === 0) return 10;
    if(product < 10) return product;
    
    let smallPos = 0;
    while(product > 9) {
        const orig = product
        for(let i = 9; i > 1; i--) {
            if(product % i === 0) {
                let nextDigit = product / i
                nextDigit = digitsProduct(nextDigit)
                if(nextDigit === -1) return -1
                smallPos = smallPos * 10 + nextDigit
                product = i
                break;
            }
        }
        if (product === orig) return -1
    }
    return smallPos * 10 + product
}