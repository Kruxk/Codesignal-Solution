function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    let days = 0;
    let night = false;
    while(currentHeight < desiredHeight) {
        if (night) {
            currentHeight = currentHeight - downSpeed
            night = false
        } else {
            currentHeight = currentHeight + upSpeed
            days++
            night = true
        }        
    }
    return days
}