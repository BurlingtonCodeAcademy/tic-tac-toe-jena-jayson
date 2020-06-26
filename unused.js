let gameArray = ['', '', '', '', '', '', '', '', '']
let startButton = document.getElementById('start');
let status = document.getElementById('status');
let cells = Array.from(document.getElementsByClassName('cell'));

let playerOne = document.getElementById('playerOne');
let playerTwo = document.getElementById('playerTwo');


let wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
[1, 4, 7], [2, 5, 8], [3, 6, 9],
[1, 5, 9], [3, 5, 7]]

//timeclock

function addSeconds(num) {
  setInterval(tick, 1000);

  function tick() {
    document.getElementById("clock").textContent=`Time elapsed: ${num} seconds`;
    num = num + 1;
  }
}
addSeconds(0);

// function startGame() {
//   startButton.addEventListener('click', (event) => {
//     alert('Goodbye')
//     myButton.disabled = true
//   })
// }
function clearBoxes() {
  currentBoard.forEach(async function (box, i) {
    let boxID = 'box' + (i + 1);
    let currentBox = document.getElementById(boxID);
    currentBox.style.backgroundColor = 'white';
    currentBox.removeEventListener('click');
  })

}


playerOne = (playerOne.value === '' ? 'X' : playerOne.value);
playerTwo = (playerTwo.value === '' ? 'O' : playerTwo.value);
let player = playerOne

status.textContent = `Player ${player}'s turn`;


function clicked(event) {
  event.target.textContent = player;
  event.target.removeEventListner('click', clicked);
  event.target.addEventListener('click', alreadyClicked);
  boardState[parseInt(event.target.id)] = player

  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
  status.textContent = `Player ${player}'s turn`
}


function alreadyClicked() {
  status.textContent = `already clicked`
}

drawBoard(gameArray)
function drawBoard(currentBoard) {
  currentBoard.forEach(async function (box, i) {
    let boxID = 'box' + (i + 1);
    console.log(boxID);
    let currentBox = document.getElementById(boxID);
    currentBox.innerHTML = box;
  })
}

// let start = document.getElementById("start")
// let status = document.getElementById("status")



startGame()


let startButton = document.getElementById('start-button');
let statusBox = document.getElementById('status')
let allBoxes = document.getElementsByClassName('cell')
let gameArray = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
[1, 4, 7], [2, 5, 8], [3, 6, 9],
[1, 5, 9], [3, 5, 7]];

startGame()


function startGame() {

  startButton.addEventListener('click', (event) => {
    startButton.style.backgroundColor = 'darkgray';
    statusBox.innerHTML = 'Player X\'s turn';
    startButton.disabled = true
    gameArray = ['', '', '', '', '', '', '', '', ''];
    player = 'X'
    drawBoard(gameArray);
    $(".cell").css('background-color', '')
    activateCells();
  })

}

function activateCells() {
  $(".cell").bind("click", function (event) {
    let currentPlayerIndex = event.target.id[3] - 1
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
  });
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
  $(".cell").unbind();
}

function drawBoard(currentBoard) {
  currentBoard.forEach(async function (box, i) {
    let boxID = 'box' + (i + 1);
    let currentBox = document.getElementById(boxID);
    currentBox.innerHTML = box;
  })
}
Collapse








