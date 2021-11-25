'use strict'

console.log('sprint 1, mine sweeper')
const CELL_CLEAR = []



var gFlag = '🚩'
    //'<img src="img/flag.png">'
    //var gMine = '💣'

var board = [];
// the model
var gBoard = {
    score: 0,
    isShown: true

}

var gLevel = {
    SIZE: 4,
    MINES: 2
};

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function initGame() {
    gBoard = buildBoard()
    renderBoard(gBoard, '.board-container')
    setMinesNegsCount(gLevel, '.board-container')
    gBoard.isShown = true
    gGame.isOn = true
}
//creating the model
function buildBoard() {
    var SIZE = 4;
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = CELL_CLEAR;
        }
    }
    board[1][0] = MINE
    board[3][2] = MINE
    return board
}



function cellClicked(elCell, i, j) {
    console.log('hello')

    elCell.innerHTML = board[i][j];

    if (board[i][j] === MINE) {
        elCell.style.backgroundColor = '#50c5bf'
        console.log('elcell', elCell)

        //gCountScore

    }



}



function cellMarked(elCell) {
    var elCell = document.querySelector('td')
    // elCell = {
    //     i: gBoard.isShown,
    //     j: gBoard.isShown
    // }

    switch (elCell) {
        case 'left click':
elCell
            break;

        default:
            break;
    }

}







// function updateScore(diff) {
//     gGame.score += diff;
//     document.querySelector('h2 span').innerText = gGame.score
// }

function checkGameOver() {
    console.log('Game Over');

    gGame.isOn = false;
    toggleModel('block')
    clearInterval(gIntervalGhosts)

}

// function restarGame() {
//     init()
//     toggleModel('none')

// }