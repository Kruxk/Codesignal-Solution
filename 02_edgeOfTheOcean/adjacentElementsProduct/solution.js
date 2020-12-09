function adjacentElementsProduct(inputArray) {
    return inputArray.reduce((acc, curr, i) => {
        const product = curr * inputArray[i + 1];
        if(product > acc) return product;
        return acc
    }, -Infinity)
}