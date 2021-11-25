'use strict'
console.log('JS mines')

//var isHiden = true

var MINE = '💣'




function setMinesNegsCount(board) {
    var minesAroundCount = 0;

    console.log(board)
    for (var i = board.length - 1; i <= board.length + 1; i++) {
        if (i === CELL_CLEAR[i]) continue;
        for (var j = board.length - 1; j <= board.length + 1; j++) {
            if (j === CELL_CLEAR[j]) continue;
            if (board[i][j] === MINE)
                minesAroundCount++;
            console.log(minesAroundCount)
        }


    }
    return minesAroundCount;
}

// function setMinesNegsCount(board) {
//     var minesAroundCount = board.MINE
//     for (i = 0; i < board.length; i++) {
//         for (var j = 0; j < board.length; i++) {
//             minesAroundCount = gLevel.MINES;
//             console.log(minesAroundCount)
//             if (rowIdx === MINE && colIdx === MINE) {
//                 minesAroundCount++

//             } else {
//                 minesAroundCount
//             }

//         }

//     }




// }

// function renderCell(location, value) {
//     // Select the elCell and set the value
//     var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
//     console.log('elcell', elCell)
//     elCell.innerHTML = value;
// }