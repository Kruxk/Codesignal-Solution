function avoidObstacles(inputArray) {
    return [...Array(Math.max(...inputArray) + 2).keys()]
            .find((el) => el !== 0 ? inputArray.every((val) => val % el !== 0) : false)
}