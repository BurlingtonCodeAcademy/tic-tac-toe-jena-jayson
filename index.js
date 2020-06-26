let startButton = document.getElementById('start-button');
let statusBox = document.getElementById('status')
let allBoxes = document.getElementsByClassName('cell')
let gameArray = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
[1, 4, 7], [2, 5, 8], [3, 6, 9],
[1, 5, 9], [3, 5, 7]];


function startGame() {

    startButton.addEventListener('click', (event) => {
        startButton.style.backgroundColor = 'darkgray';
        statusBox.innerHTML = 'Player X\'s turn';
        startButton.disabled = true
        gameArray = ['', '', '', '', '', '', '', '', ''];
        drawBoard(gameArray);
    })
    gameArray.forEach(async function (box, i) {
        let boxID = 'box' + (i + 1);
        let currentBox = document.getElementById(boxID);
        currentBox.addEventListener('click', function _func() {
            let currentPlayerIndex = currentBox.id[3] - 1
            let indexContent = gameArray[currentPlayerIndex]
            if (indexContent === 'X' || indexContent === 'O') {
                alert("Please select an empty cell.")

            } else {
                gameArray[currentPlayerIndex] = player
                drawBoard(gameArray)
                winTest();
                if (player === 'X') {
                    player = 'O'
                } else {
                    player = 'X'
                }
                statusBox.textContent = `Player ${player}'s turn`
            }
        })
    })
}

function winTest() {
    for (i = 0; i < wins.length; i++) {
        let testVal1 = gameArray[wins[i][0] - 1];
        let testVal2 = gameArray[wins[i][1] - 1];
        let testVal3 = gameArray[wins[i][2] - 1];
        console.log(gameArray[wins[i][0]])

        if ((testVal1 === testVal2) && (testVal2 === testVal3) && (testVal3 != '')) {
            endGame()
        }

    }

}

function endGame() {
    alert(`Congratulations! Player ${player} wins!`)
    let winBox1 = document.getElementById('box' + wins[i][0])
    let winBox2 = document.getElementById('box' + wins[i][1])
    let winBox3 = document.getElementById('box' + wins[i][2])
    winBox1.style.backgroundColor = 'red'
    winBox2.style.backgroundColor = 'red'
    winBox3.style.backgroundColor = 'red'
    startButton.disabled = false;
    startButton.style.backgroundColor = 'lawngreen';

    disableBoxes()

}

function disableBoxes() {
    gameArray.forEach(async function (box, i) {
        let boxID = 'box' + (i + 1);
        $("#" + boxID).off('click',"#" + boxID)
        // $("body").off('click', ".cell")
        // let currentBox = document.getElementById(boxID);
        // currentBox.removeEventListener('click', _func);
    })

}



function drawBoard(currentBoard) {
    currentBoard.forEach(async function (box, i) {
        let boxID = 'box' + (i + 1);
        let currentBox = document.getElementById(boxID);
        currentBox.innerHTML = box;
    })
}

startGame()