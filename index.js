//Global Variables defined below
// startButton, statusBox, allBoxes are pulled in, identified by id or class from html page

let startButton = document.getElementById('start-button');
let statusBox = document.getElementById('status');
let allBoxes = document.getElementsByClassName('cell');
let gameArray = ['', '', '', '', '', '', '', '', ''];
// player=X as used in startGame function, in this version of tic tac toe X makes the first move
let player = 'X';  
let playerX = '';
let playerO = ''
// all possible wins on the board, the various arrays correlate with the Box Ids in the html file
let wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
[1, 4, 7], [2, 5, 8], [3, 6, 9],
[1, 5, 9], [3, 5, 7]];


startGame()
//sets up clock and resets
let interval = setInterval(tick, 1000);
clearInterval(interval);
// function below starts the game
function startGame() {
    // per project stories, startButton changes the background color of the start button to gray, disables the button, and triggers a series of functions to begin the game
    startButton.addEventListener('click', (event) => {
        startButton.style.backgroundColor = 'darkgray';
        startButton.disabled = true
        // game array empty at start to indicate no one has marked a square
        gameArray = ['', '', '', '', '', '', '', '', ''];
        player = 'X'
        drawBoard(gameArray); //draws board in it's current state
        $(".cell").css('background-color', '') //using Jquery, makes sure the background color of every square is white, which is especially useful if game has been played already and the winning boxes have lit up
        activateCells(); //trigger function for individual boxes
        seconds = 0 //game clock starts at 0
        interval = setInterval(tick, 1000); //clock increases by 1 second at a time
        playerX = $('#playerOne').val() || 'X' //if someone has filled in their name in player one box, playerX = their name, if not the game considers them to be X, the same is true with playerO below
        playerO = $('#playerTwo').val() || 'O'
        statusBox.innerHTML = `${playerX}'s turn`; //displays whose turn it is in status box

    })
}

//Function to make the clock display and increase by 1 second every second
function tick() {
    document.getElementById("clock").textContent = `Time elapsed: ${seconds} seconds`;
    seconds = seconds + 1;
}


function activateCells() {
    $(".cell").bind("click", function (event) {
        let currentPlayerIndex = event.target.id[3] - 1 //get index for gameArray
        let indexContent = gameArray[currentPlayerIndex] //get content for selected box

        let aiSelection = $('input[type=radio]:checked').val() //determines if player O is computer

        if (indexContent === 'X' || indexContent === 'O') { //check for selected cell
            alert("Please select an empty cell.")

        } else {
            gameArray[currentPlayerIndex] = player //sets gameArray to selected cell
            drawBoard(gameArray) //draws updated board with new x or o

            if (winTest() === true) {  //checks for win
                return true
            }
            //Below is for the status box, based on imput from Player One and  Player 2, and uses "O" for player 2 if aiSelection was for a player to play the computer
            if (player === 'X' && aiSelection === 'player') {
                player = 'O' //changes player if both are human
                statusBox.textContent = `${playerO}'s turn` 

            } else if (player === 'X' && aiSelection === 'computer') {

                player = 'O'
                emptyArray = []
                gameArray.forEach(async function (box, i) { //if computer is player O, this function finds all empty boxes
                    box === '' ? emptyArray.push(i) : false;

                })
                //out of all the empty boxes, randomly selects one and triggers click function with new box
                let compSelection = emptyArray[Math.floor(Math.random() * emptyArray.length)] + 1;
                $('#box' + compSelection).click()

            } else {
                player = 'X'  //changes player if both are human
                statusBox.textContent = `${playerX}'s turn`
            }
        }
    });
}



function winTest() {
    for (i = 0; i < wins.length; i++) {
       
        let testVal1 = gameArray[wins[i][0] - 1];   //first number in each possible winning array
        let testVal2 = gameArray[wins[i][1] - 1];   //second number in each possible winning array
        let testVal3 = gameArray[wins[i][2] - 1];   //third number in each possible winning array

        //tests each win scenario with testVals from gameArray
        if ((testVal1 === testVal2) && (testVal2 === testVal3) && (testVal3 != '')) {
            //lock in winning player and delay alert for endGame function to run
            let winner = player;
            setTimeout(function () { alert(`Congratulations! ${winner} wins!`); }, 1000);
            endGame()
            return true //returns value to prevent win test from proceeding
        }
    }

    //in the event of a tie game, end the game
    if (!gameArray.includes('')) {
        setTimeout(function () { alert(`You tied! Try again!`); }, 1000);
        startButton.disabled = false;
        startButton.style.backgroundColor = 'lawngreen';
        $(".cell").unbind(); //removes click event, makes background color white
        clearInterval(interval) //stop the clock
        statusBox.textContent = "TIE TIE TIE TIE"
        return true  //returns value to prevent win test from proceeding
    }
}

function endGame() {
    //turns winning boxes red
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


//draws board based on gameArray
function drawBoard(currentBoard) {
    currentBoard.forEach(async function (box, i) {
        let boxID = 'box' + (i + 1);
        let currentBox = document.getElementById(boxID);
        currentBox.innerHTML = box;
    })
}

