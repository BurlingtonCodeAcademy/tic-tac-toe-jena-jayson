let startButton = document.getElementById('start-button');
let statusBox = document.getElementById('status');
let allBoxes = document.getElementsByClassName('cell');
let gameArray = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let playerX = '';
let playerO = ''
let wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
[1, 4, 7], [2, 5, 8], [3, 6, 9],
[1, 5, 9], [3, 5, 7]];


startGame()
//sets up clock and resets
let interval = setInterval(tick, 1000);
clearInterval(interval);

function startGame() {

    startButton.addEventListener('click', (event) => {
        startButton.style.backgroundColor = 'darkgray';
        startButton.disabled = true
        gameArray = ['', '', '', '', '', '', '', '', ''];
        player = 'X'
        drawBoard(gameArray);
        $(".cell").css('background-color', '')
        activateCells();
        seconds = 0
        interval = setInterval(tick, 1000);
        playerX = $('#playerOne').val() || 'X'
        playerO = $('#playerTwo').val() || 'O'
        statusBox.innerHTML = `${playerX}'s turn`;

    })
}


function tick() {
    document.getElementById("clock").textContent = `Time elapsed: ${seconds} seconds`;
    seconds = seconds + 1;
}


function activateCells() {
    $(".cell").bind("click", function (event) {
        let currentPlayerIndex = event.target.id[3] - 1
        let indexContent = gameArray[currentPlayerIndex]

        let aiSelection = $('input[type=radio]:checked').val()

        if (indexContent === 'X' || indexContent === 'O') {
            alert("Please select an empty cell.")

        } else {
            gameArray[currentPlayerIndex] = player
            drawBoard(gameArray)

            if (winTest() === true) {
                return true
            }

            if (player === 'X' && aiSelection === 'player') {
                player = 'O'
                statusBox.textContent = `${playerO}'s turn`

            } else if (player === 'X' && aiSelection === 'computer') {

                player = 'O'
                emptyArray = []
                gameArray.forEach(async function (box, i) {
                    box === '' ? emptyArray.push(i) : false;

                })

                let compSelection = emptyArray[Math.floor(Math.random() * emptyArray.length)] + 1;
                $('#box' + compSelection).click()

            } else {
                player = 'X'
                statusBox.textContent = `${playerX}'s turn`
            }
        }
    });
}



function winTest() {
    for (i = 0; i < wins.length; i++) {
        let testVal1 = gameArray[wins[i][0] - 1];
        let testVal2 = gameArray[wins[i][1] - 1];
        let testVal3 = gameArray[wins[i][2] - 1];

        if ((testVal1 === testVal2) && (testVal2 === testVal3) && (testVal3 != '')) {
            //lock in winning player and delay alert for endGame function to run
            let winner = player;
            setTimeout(function () { alert(`Congratulations! ${winner} wins!`); }, 1000);
            endGame()
            return true
        }
    }

    //in the event of a tie game
    if (!gameArray.includes('')) {
        setTimeout(function () { alert(`You tied! Try again!`); }, 1000);
        startButton.disabled = false;
        startButton.style.backgroundColor = 'lawngreen';
        $(".cell").unbind();
        clearInterval(interval)
        statusBox.textContent = "TIE TIE TIE TIE"
        return true
    }
}

function endGame() {
    let winBox1 = document.getElementById('box' + wins[i][0])
    let winBox2 = document.getElementById('box' + wins[i][1])
    let winBox3 = document.getElementById('box' + wins[i][2])
    winBox1.style.backgroundColor = 'red'
    winBox2.style.backgroundColor = 'red'
    winBox3.style.backgroundColor = 'red'
    startButton.disabled = false;
    startButton.style.backgroundColor = 'lawngreen';
    $(".cell").unbind();
    clearInterval(interval)
    statusBox.textContent = "WINNER WINNER WINNER"
}

function drawBoard(currentBoard) {
    currentBoard.forEach(async function (box, i) {
        let boxID = 'box' + (i + 1);
        let currentBox = document.getElementById(boxID);
        currentBox.innerHTML = box;
    })
}

