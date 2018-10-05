const table = document.getElementById('game-board');
const boardElements = table.getElementsByTagName('td');
const gameBoard = createArray(3, 3);

// Denne her kode opsætter variablen gameBoard
for (let i = 0; i <= 8; i++) {
  const x = i % 3;
  const y = getYCoordinate(i);
  gameBoard[x][y] = boardElements[i];
}

// 1. Tjek at der ikke allerede er trykket på feltet
// 2. Afgør om det der skal sættes et kryds eller en bolle
function onClick(td) {
  td.clicked = true;

  // Funktionen sætter et O på et felt
  //   putOInTd(td);

  // Funktionen sætter et X på et felt
  putXInTd(td);

  // Spillet opdaterer efter hvert tryk
  updateGame();
}

let didSomeoneWin = false;
function updateGame() {
  // 2. Tjek om der er en der har vundet
  //  2.1 Hvis der er en der har vundet, vis en besked, og lad spillet starte forfra
  if (didSomeoneWin) {
  }

  didSomeoneWin = true;
  // 3. Tjek om alle felter er trykket på, dvs. spillet er uafgjort
}

function showVictoryMessage() {
  // 4. Skriv at der er en der har vundet
}

function resetGame() {
  // 5 Nulstil spillet til start
  // 5.1 Sæt alle felter til ikke at have kryds og boller
  // 5.2 Sæt alle felter til ikke at have været trykket på
  // 5.3 Nulstil
}
