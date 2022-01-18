


const checkWinner = function(arr, currPlayer) {

    let invertMatrix = []

    for(const [iR, row] of Object.entries(arr)) {
        for(const [iC, value] of Object.entries(row)) {
            if (!invertMatrix[iC]) {
                invertMatrix[iC] = [value];
              } else {
                invertMatrix[iC][iR] = value;
              }
        }
    }

    let diagInLine = [[]]
    let invertDiagInLine = [[]]

    for(const [iR, row] of Object.entries(arr)) {
        diagInLine[0].push(row[iR])
    }
    for(const [iR, row] of Object.entries(invertMatrix.reverse())) {
        invertDiagInLine[0].push(row[iR])
    }

    const checkLineWinner = function(m) {
        let result = null
        m.forEach(element => {
         let count = 0
            element.forEach(el => {
                if(el==currPlayer) count++
            })   
            if (count === 3) result = currPlayer;  
            
              
        });
        return result
    }

    return ( 
        checkLineWinner(arr) || 
        checkLineWinner(invertMatrix) ||
        checkLineWinner(diagInLine) ||
        checkLineWinner(invertDiagInLine)
    )
}

export default checkWinner;