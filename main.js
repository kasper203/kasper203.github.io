const table = document.getElementById('game-board');
const boardElements = table.getElementsByTagName('td');
const gameBoard = createArray(3, 3);

// Denne her kode opsætter variablen gameBoard
for (let i = 0; i <= 8; i++) {
  const x = i % 3;
  const y = getYCoordinate(i);
  gameBoard[x][y] = boardElements[i];
}
let xTurn = true
let oTurn = false

let xWins = 0;
let oWins = 0;

let clicks = 0
let xWon = false;
let oWon = false;
// 1. Tjek at der ikke allerede er trykket på feltet
// 2. Afgør om det der skal sættes et kryds eller en bolle
function onClick(td) {
  if (td.clicked || xWon || oWon) {
    return;
  }
  clicks = clicks + 1

  td.clicked = true;
  // Funktionen sætter et O på et felt
  //   putOInTd(td);

  if (xTurn) {
    td.x = true
    putXInTd(td)
    xTurn = false
    oTurn = true

  } else if (oTurn) {
    xTurn = true
    oTurn = false
    putOInTd(td)
    td.o = true
  }
  if (clicks === 9) {
    showMessage('Spillet er uafgjort, opdater for at starte forfra')
  }



  if ((gameBoard[0][2].x && gameBoard[1][2].x && gameBoard[2][2].x) ||
    (gameBoard[0][1].x && gameBoard[1][1].x && gameBoard[2][1].x) ||
    (gameBoard[0][0].x && gameBoard[1][0].x && gameBoard[2][0].x) ||
    (gameBoard[0][2].x && gameBoard[0][1].x && gameBoard[0][0].x)) {
    xWon = true;
  }


  if (gameBoard[1][2].x && gameBoard[1][1].x && gameBoard[1][0].x) {
    xWon = true;
  }

  if (gameBoard[2][2].x && gameBoard[2][1].x && gameBoard[2][0].x) {
    xWon = true;
  }
  if (gameBoard[0][2].x && gameBoard[1][1].x && gameBoard[2][0].x) {
    xWon = true;
  }
  if (gameBoard[2][2].x && gameBoard[1][1].x && gameBoard[0][0].x) {
    xWon = true;
  }


  if (gameBoard[0][2].o && gameBoard[1][2].o && gameBoard[2][2].o) {
    oWon = true;
  }
  if (gameBoard[0][1].o && gameBoard[1][1].o && gameBoard[2][1].o) {
    oWon = true;
  }

  if (gameBoard[0][0].o && gameBoard[1][0].o && gameBoard[2][0].o) {
    oWon = true;
  }

  if (gameBoard[0][2].o && gameBoard[0][1].o && gameBoard[0][0].o) {
    oWon = true;
  }
  if (gameBoard[1][2].o && gameBoard[1][1].o && gameBoard[1][0].o) {
    oWon = true;
  }

  if (gameBoard[2][2].o && gameBoard[2][1].o && gameBoard[2][0].o) {
    oWon = true;
  }
  if (gameBoard[0][2].o && gameBoard[1][1].o && gameBoard[2][0].o) {
    oWon = true;
  }
  if (gameBoard[2][2].o && gameBoard[1][1].o && gameBoard[0][0].o) {
    oWon = true;
  }

  if (oWon) {
    oWins++;
    showMessage('o har vundet!')
    const element = document.getElementById('numberOfOWins');
    element.innerHTML = oWins;
  }
  if (xWon) {
    xWins++;
    showMessage('x har vundet!')
    const element = document.getElementById('numberOfXWins');
    element.innerHTML = xWins;
  }
}



function resetGame() {
  clicks = 0;
  xTurn = true;
  oTurn = false;
  xWon = false;
  oWon = false;
  showMessage('');

  for (let i = 0; i <= 8; i++) {

    boardElements[i].x = false;
    boardElements[i].o = false;
    boardElements[i].clicked = false;
    clearTd(boardElements[i]);
  }
}

function resetScore() {
  xWins = 0
  oWins = 0
  const element = document.getElementById('numberOfXWins');
  element.innerHTML = xWins;
  const element1 = document.getElementById('numberOfOWins');
  element1.innerHTML = oWins;
}