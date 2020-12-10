function spiralNumbers(n) {
    const arr = Array(n*n).fill(null).map((el,i)=> i+1);
    let result = [];
    let i = 0
    while(arr.length) {
        result.reverse()
        result = result.length?result[0].map((col, i) => result.map(row => row[i])) : result;
        result.unshift(arr.splice(-(Math.floor(i/2)+1)));
        i++
    }
    return result;
}