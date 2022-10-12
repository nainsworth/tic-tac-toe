const TicTacToe = (() => {
  // --------------------- DOMS ----------------------
  const gameCell = document.querySelectorAll("[data-cell]");
  const modal = document.querySelector(".modal");
  const results = document.querySelector(".gameResults");
  const newGameBtn = document.querySelector(".newGame");

  let opponentTurn;

  //---------- Choose Cell ----------
  const playGame = () => {
    gameCell.forEach((cell) => {
      opponentTurn = false;
      cell.classList.remove("x");
      cell.classList.remove("o");
      cell.addEventListener("click", handleClick, { once: true });
    });
  };

  //---------- Handle Game Clicks ----------
  const handleClick = (e) => {
    const cell = e.target;
    const currentTurn = opponentTurn ? "o" : "x";
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

  newGameBtn.addEventListener("click", resetGame);

  playGame();
})();

//---------- Player Object ----------
//   const player = (name, mark, turn) => {
//     return { name, mark, turn };
//   };

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

// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.

// Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

// Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!

// Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

// Clean up the interface to allow players to put in their names

// Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!

// Start by just getting the computer to make a random legal move.

// Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)

// If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!
