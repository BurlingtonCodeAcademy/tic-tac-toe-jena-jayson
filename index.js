let startButton = document.getElementById('start-button');
let statusBox = document.getElementById('status')
let allBoxes = document.getElementsByClassName('cell')
let gameArray = ['', '', '', '', '', '', '', '', '']
let player = 'X'

function startGame() {
    startButton.addEventListener('click', (event) => {
        startButton.classList.add('start-button-active');
        statusBox.innerHTML = 'Player X\'s turn';
        startButton.disabled = true
    })
    gameArray.forEach(async function (box, i) {
        let boxID = 'box' + (i + 1);
        let currentBox = document.getElementById(boxID);
        currentBox.addEventListener('click', (event) => {
            gameArray[currentBox.id[3]-1]=player
            drawBoard(gameArray)
            if (player === 'X') {
                player = 'O'
              } else {
                player = 'X'
              }
              statusBox.textContent = `Player ${player}'s turn`
            
            


        } )
    })




}

// let startButton = document.getElementsByTagName('div')[0]
// myDiv.addEventListener('click', () => {
//     event.target.style.backgroundColor = "red"
// })



function drawBoard(currentBoard) {
    currentBoard.forEach(async function (box, i) {
        let boxID = 'box' + (i + 1);
        let currentBox = document.getElementById(boxID);
        currentBox.innerHTML = box;
    })
}

startGame()