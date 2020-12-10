function arrayMaxConsecutiveSum(inputArray, k) {
    let result = 0;
    for (let i = 0; i <= inputArray.length - k; i++) {
        let count = 0;
        for (let j = 0; j < k; j++) {
            count += inputArray[i + j];
        }
        result = Math.max(result, count);
    }
    return result;
}