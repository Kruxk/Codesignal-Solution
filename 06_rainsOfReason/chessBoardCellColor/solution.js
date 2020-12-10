function chessBoardCellColor(cell1, cell2) {
    if(cell1.charCodeAt(0) % 2 === 1) {
        if(cell2.charCodeAt(0) % 2 === 1) {
            return cell1[1] % 2 === cell2[1] % 2
        } else {
            return cell1[1] % 2 !== cell2[1] % 2 
        }
    } else {
        if(cell2.charCodeAt(0) % 2 === 1) {
            return cell1[1] % 2 !== cell2[1] % 2
        } else {
            return cell1[1] % 2 === cell2[1] % 2
        }
    }
}
