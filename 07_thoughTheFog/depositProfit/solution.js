function depositProfit(deposit, rate, threshold, iterations = 0) {
    if(deposit >= threshold) return iterations
    return depositProfit(deposit + ((deposit / 100) * rate), rate, threshold, iterations + 1)
}