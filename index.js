let gameArray = ['', '', '', '', '', '', '', '', '']
let startButton = document.getElementById('start');
let status = document.getElementById('status');
let cells = Array.from(document.getElementsByClassName('cell'));
let playerOne = document.getElementById('playerOne');
let playerTwo = document.getElementsById('playerTwo');


let wins = [1, 2, 3][4, 5, 6][7, 8, 9]
[1, 4, 7][2, 5, 8][3, 6, 9]
[1, 5, 9][3, 5, 7]



function start() {
  startButton.addEventListener('click', (event) => {
    alert('Goodbye')
    myButton.disabled = true
  })

  
  })
  playerOne = (playerOne.value === '' ? 'X' : playerOne.value);
  playerTwo = (playerTwo.value === '' ? 'O' : playerTwo.value);
  status.textContent = `Player ${player}'s turn`;
  };

function clicked(event) {
  event.target.textContent = player;
  event.target.removeEventListner('click', clicked);
  event.target.addEventListener('click', alreadyClicked);
  boardState[parseInt(event.target.id)] = player

  checkWin(player);


  if (player === 'x') {
      player = 'o'

  } else {
      player = 'x'
  }

  status.textContent = `Player ${player}'s turn`
}


function alreadyClicked() {
  status.textContent = `already clicked`


drawBoard(gameArray)
function drawBoard(currentBoard) {
    currentBoard.forEach(async function (box, i) {
      let boxID = 'box' + (i + 1) ;
      console.log(boxID) ;
      let currentBox = document.getElementById(boxID);
      currentBox.innerHTML = box;
    })

}

let start = document.getElementById("start")
let status = document.getElementById("status")

start.addEventListener("click", (event) => {
  event.disable
})