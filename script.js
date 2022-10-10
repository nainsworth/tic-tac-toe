const Gameboard = (() => {
  // Player Object
  const player = (name, mark, turn) => {
    return { name, mark, turn };
  };

  // gameBoard Object
  const gameBoard = (() => {
    // Choose Difficulty
    const chooseDifficulty = () => {
      const difficulty = document.querySelector("[data-difficulty]");
    };

    // Choose Opponent
    const chooseOpponent = () => {
      const opponent = document.querySelector("[data-opponent]");
    };
  })();

  // Game Play Object
  const playGame = (() => {
    let opponentTurn;

    // Choose Cell
    const selectCell = () => {
      const gameCell = document.querySelectorAll("[data-cell]");
      gameCell.forEach((cell) => {
        cell.addEventListener("click", handleClick, { once: true });
      });
    };

    // Handle Game Clicks
    const handleClick = (e) => {
      const cell = e.target;
      const currentTurn = opponentTurn ? "o" : "x";
      placeMark(cell, currentTurn);
    };

    // Place Mark
    const placeMark = (cell, currentTurn) => {
      cell.classList.add(currentTurn);
    };

    // Switch Turns
    const switchTurns = () => {};

    return { selectCell };
  })();

  // displayController
  const displayController = (() => {
    // Check for Wins
    const checkWins = () => {};

    // Check for Draws
    const checkDraw = () => {};

    // Display Game Results
    const displayResults = () => {};
  })();

  return { playGame };
})();

Gameboard.playGame.selectCell();
