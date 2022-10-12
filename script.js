// const Gameboard = (() => {
//---------- Player Object ----------
//   const player = (name, mark, turn) => {
//     return { name, mark, turn };
//   };

//---------- gameBoard Object ----------
//   const gameBoard = (() => {
//     //---------- Choose Difficulty ----------
//     const chooseDifficulty = () => {
//       const difficulty = document.querySelector("[data-difficulty]");
//     };

//     //---------- Choose Opponent ----------
//     const chooseOpponent = () => {
//       const opponent = document.querySelector("[data-opponent]");
//     };

//     //---------- Create Game ----------
//     const createGame = (difficulty, opponent) => {};
//   })();

//   //---------- Game Play Object ----------

//   const Game = (() => {
//     let opponentTurn = false;

//     return { playGame };
//   })();

//---------- controller ----------
//   const controller = (() => {

//   })();
// })();

// --------------------- DOMS ----------------------
const gameCell = document.querySelectorAll("[data-cell]");
const modal = document.querySelector(".modal");
const results = document.querySelector(".gameResults");
const newGameBtn = document.querySelector(".newGame");

let opponentTurn;

//---------- Choose Cell ----------
function playGame() {
  gameCell.forEach((cell) => {
    opponentTurn = false;
    cell.classList.remove("x");
    cell.classList.remove("o");
    cell.addEventListener("click", handleClick, { once: true });
  });
}

//---------- Handle Game Clicks ----------
function handleClick(e) {
  const cell = e.target;
  const currentTurn = opponentTurn ? "o" : "x";
  placeMark(cell, currentTurn);
  switchTurns();
  if (checkWin(currentTurn)) {
    displayResults(opponentTurn, false);
  } else if (checkDraw()) {
    displayResults(opponentTurn, true);
  }
}

//---------- Place Mark ----------
function placeMark(cell, currentTurn) {
  cell.classList.add(currentTurn);
}

//---------- Switch Turns ----------
function switchTurns() {
  opponentTurn = !opponentTurn;
}

//---------- Check for Wins ----------
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin(currentTurn) {
  return winningPatterns.some((combo) => {
    return combo.every((index) => {
      return gameCell[index].classList.contains(currentTurn);
    });
  });
}

//---------- Check for Draws ----------
function checkDraw() {
  return [...gameCell].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  });
}

//---------- Display Game Results ----------
function displayResults(opponentTurn, draw) {
  modal.classList.add("active");

  if (!draw) {
    results.innerText = `PLAYER ${opponentTurn ? "X" : "O"} WINS!`;
  } else {
    results.innerText = `DRAW!`;
  }
}

//---------- Reset Game ----------
function resetGame() {
  playGame();
  modal.classList.remove("active");
}

newGameBtn.addEventListener("click", resetGame);

playGame();

