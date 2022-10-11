// const Gameboard = (() => {
//   // Player Object
//   const player = (name, mark, turn) => {
//     return { name, mark, turn };
//   };

//   // gameBoard Object
//   const gameBoard = (() => {
//     // Choose Difficulty
//     const chooseDifficulty = () => {
//       const difficulty = document.querySelector("[data-difficulty]");
//     };

//     // Choose Opponent
//     const chooseOpponent = () => {
//       const opponent = document.querySelector("[data-opponent]");
//     };

//     // Create Game
//     const createGame = (difficulty, opponent) => {};
//   })();

//   // Game Play Object
//   const Game = (() => {
//     let opponentTurn = false;

//     // Choose Cell
//     const playGame = () => {
//       const gameCell = document.querySelectorAll("[data-cell]");
//       gameCell.forEach((cell) => {
//         cell.addEventListener("click", handleClick, { once: true });
//       });
//       return { gameCell };
//     };

//     // Handle Game Clicks
//     const handleClick = (e) => {
//       const cell = e.target;
//       const currentTurn = opponentTurn ? "o" : "x";
//       placeMark(cell, currentTurn);
//       switchTurns();
//       if (controller.checkWins(currentTurn)) {
//         console.log(`${currentTurn} is the winner`);
//       }
//     };

//     // Place Mark
//     const placeMark = (cell, currentTurn) => {
//       cell.classList.add(currentTurn);
//     };

//     // Switch Turns
//     const switchTurns = () => {
//       opponentTurn = !opponentTurn;
//     };

//     playGame();

//     return { playGame };
//   })();

//   // controller
//   const controller = (() => {
//     // Check for Wins
//     const checkWins = (currentTurn) => {
//       const winningPatterns = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//       ];

//       return winningPatterns.some((combination) => {
//         return combination.every((index) => {
//           return Game.playGame.gameCell[index].classList.contains(currentTurn);
//         });
//       });
//     };

//     // Check for Draws
//     const checkDraw = () => {};

//     // Display Game Results
//     const displayResults = () => {};

//     return { checkWins };
//   })();
// })();

const TicTacToe = (() => {
  //Setting up the gameboard module
  const gameBoardModule = (function () {
    const gameBoard = ["x"];

    const renderArray = (function() {
      let index = 0;
      const gameCell = document.querySelectorAll("[data-cell]");
      gameCell.forEach((cell) => {
        cell.dataset = index


        cell.addEventListener("click", () => {
          console.log(cell.getAttribute);
        })
        index++
      });

     // const gameCell = document.querySelectorAll("[data-cell]");
      //       gameCell.forEach((cell) => {
      //         cell.addEventListener("click", handleClick, { once: true });
      //       });

      console.log(gameBoard);
      console.log(gameCell);
    })();

    return {};
  })();

  //Setting up player factor function
  const createplayer = (name, mark) => {
    return { name, mark };
  };

  //Setting up the display controller module
  const displayController = (function () {
    return {};
  })();
})();
