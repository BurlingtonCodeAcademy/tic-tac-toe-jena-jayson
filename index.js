let gameArray = ['x', '', 'o', '', '', 'x', '', '', '']

function winTest() {

}

drawBoard(gameArray)
function drawBoard(currentBoard) {
    currentBoard.forEach(async function (box, i) {
      let boxID = 'box' + (i + 1) ;
      console.log(boxID) ;
      let currentBox = document.getElementById(boxID);
      currentBox.innerHTML = box;
    })

}

