// Game board module
const gameBoardModule = (() => {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const gameBoard = ['', '', '', '', '', '', '', '', ''];
    const xTurn = true;
    const running = true;
    return { gameBoard, winConditions, xTurn, running };
})();

// Factory function to create players
function playerFactory(name) {
    return { name };
}

// function that checks if there is a winner
function checkWinner(message) {
    let roundWon = false;

    const currentMessage = message;

    for (let i = 0; i < gameBoardModule.winConditions.length; i += 1) {
        const condition = gameBoardModule.winConditions[i];
        const cellA = gameBoardModule.gameBoard[condition[0]];
        const cellB = gameBoardModule.gameBoard[condition[1]];
        const cellC = gameBoardModule.gameBoard[condition[2]];

        if (
            cellA === cellB &&
            cellB === cellC &&
            !(cellA === '' || cellB === '' || cellC === '')
        ) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameBoardModule.running = false;

        if (gameBoardModule.xTurn) {
            const playerOne = playerFactory(
                document.querySelector('#player-one').value
            );
            currentMessage.textContent = `the winner is ${playerOne.name}!`;
        } else {
            const playerTwo = playerFactory(
                document.querySelector('#player-two').value
            );
            currentMessage.textContent = `the winner is ${playerTwo.name}!`;
        }
    } else if (!gameBoardModule.gameBoard.includes('')) {
        currentMessage.textContent = `draw!`;
        gameBoardModule.running = false;
    } else {
        gameBoardModule.xTurn = !gameBoardModule.xTurn;
    }
}

// Display controller module
(() => {
    // Create node list of cells
    const cells = document.querySelectorAll('.cell');

    // Get display message
    const message = document.querySelector('.message');

    // Place correct markers on board
    for (let i = 0; i < gameBoardModule.gameBoard.length; i += 1) {
        cells[i].addEventListener(
            'click',
            () => {
                if (gameBoardModule.xTurn && gameBoardModule.running) {
                    gameBoardModule.gameBoard[i] = 'X';
                    cells[i].textContent = 'X';
                    message.textContent = "player O's turn...";
                } else if (!gameBoardModule.xTurn && gameBoardModule.running) {
                    gameBoardModule.gameBoard[i] = 'O';
                    cells[i].textContent = 'O';
                    message.textContent = "player X's turn...";
                }

                // Calls function to check if there is a winner
                if (gameBoardModule.running) {
                    checkWinner(message);
                }
            },
            { once: true }
        );
    }
    return {};
})();
