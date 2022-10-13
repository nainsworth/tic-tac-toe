const TicTacToe = (() => {
  // --------------------- DOMS ----------------------
  const gameCell = document.querySelectorAll("[data-cell]");
  const modal = document.querySelector(".modal");
  const results = document.querySelector(".gameResults");
  const newGameBtn = document.querySelector(".newGame");
  const displayTurn = document.querySelector("[data-turn]");

  let opponentTurn;

  //---------- Winning Conditions ----------
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

  //---------- Choose Cell ----------
  const playGame = () => {
    gameCell.forEach((cell) => {
      opponentTurn = false;
      cell.classList.remove("x");
      cell.classList.remove("o");
      cell.addEventListener("click", handleClick, { once: true });
      showTurn(!opponentTurn);
    });
  };

  //---------- Handle Game Clicks ----------
  const handleClick = (e) => {
    const cell = e.target;
    const currentTurn = opponentTurn ? "o" : "x";
    showTurn(opponentTurn);
    placeMark(cell, currentTurn);
    switchTurns();
    if (checkWin(currentTurn)) {
      displayResults(opponentTurn, false);
    } else if (checkDraw()) {
      displayResults(opponentTurn, true);
    }
  };

  //---------- Place Mark ----------
  const placeMark = (cell, currentTurn) => {
    cell.classList.add(currentTurn);
  };

  //---------- Switch Turns ----------
  const switchTurns = () => {
    opponentTurn = !opponentTurn;
  };

  //---------- Display Player's Turn ----------
  const showTurn = (opponentTurn) => {
    displayTurn.innerText = `Player ${opponentTurn ? "X" : "O"}'s Turn`;
  };

  //---------- Check for Wins ----------
  const checkWin = (currentTurn) => {
    return winningPatterns.some((combo) => {
      return combo.every((index) => {
        return gameCell[index].classList.contains(currentTurn);
      });
    });
  };

  //---------- Check for Draws ----------
  const checkDraw = () => {
    return [...gameCell].every((cell) => {
      return cell.classList.contains("x") || cell.classList.contains("o");
    });
  };

  //---------- Display Game Results ----------
  const displayResults = (opponentTurn, draw) => {
    modal.classList.add("active");

    if (!draw) {
      results.innerText = `PLAYER ${opponentTurn ? "X" : "O"} WINS!`;
    } else {
      results.innerText = `DRAW!`;
    }
  };

  //---------- Reset Game ----------
  const resetGame = () => {
    playGame();
    modal.classList.remove("active");
  };

  //---------- Event Listener ----------
  newGameBtn.addEventListener("click", resetGame);

  //---------- Call to Play Game ----------
  playGame();
})();
