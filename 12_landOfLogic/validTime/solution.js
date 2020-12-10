function validTime(time) {
    const splitted = time.split(':')   
    return splitted[0] < 24 && splitted[0] >= 0 && splitted[1] >= 0 && splitted[1] < 60
}