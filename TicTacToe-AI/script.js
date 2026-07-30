const boardElement = document.getElementById("board");
const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const HUMAN = "X";
const AI = "O";

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener("click", humanMove);
});

function humanMove(e) {

    const index = e.target.dataset.index;

    if (board[index] !== "" || gameOver)
        return;

    board[index] = HUMAN;
    e.target.textContent = HUMAN;

    if (checkWinner(board, HUMAN)) {
        statusText.textContent = "🎉 You Win!";
        gameOver = true;
        return;
    }

    if (isDraw(board)) {
        statusText.textContent = "🤝 Draw!";
        gameOver = true;
        return;
    }

    statusText.textContent = "🤖 AI Thinking...";

    setTimeout(aiMove, 500);
}

function aiMove() {

    let bestMove = minimax(board, AI).index;

    board[bestMove] = AI;
    cells[bestMove].textContent = AI;

    if (checkWinner(board, AI)) {
        statusText.textContent = "🤖 AI Wins!";
        gameOver = true;
        return;
    }

    if (isDraw(board)) {
        statusText.textContent = "🤝 Draw!";
        gameOver = true;
        return;
    }

    statusText.textContent = "Your Turn (X)";
}

function minimax(newBoard, player) {

    let available = emptySquares(newBoard);

    if (checkWinner(newBoard, HUMAN))
        return { score: -10 };

    if (checkWinner(newBoard, AI))
        return { score: 10 };

    if (available.length === 0)
        return { score: 0 };

    let moves = [];

    for (let i = 0; i < available.length; i++) {

        let move = {};

        move.index = available[i];

        newBoard[available[i]] = player;

        if (player === AI) {

            let result = minimax(newBoard, HUMAN);
            move.score = result.score;

        } else {

            let result = minimax(newBoard, AI);
            move.score = result.score;

        }

        newBoard[available[i]] = "";

        moves.push(move);
    }

    let bestMove;

    if (player === AI) {

        let bestScore = -Infinity;

        for (let i = 0; i < moves.length; i++) {

            if (moves[i].score > bestScore) {

                bestScore = moves[i].score;
                bestMove = i;

            }

        }

    } else {

        let bestScore = Infinity;

        for (let i = 0; i < moves.length; i++) {

            if (moves[i].score < bestScore) {

                bestScore = moves[i].score;
                bestMove = i;

            }

        }

    }

    return moves[bestMove];
}

function emptySquares(board) {

    let arr = [];

    for (let i = 0; i < board.length; i++) {

        if (board[i] === "")
            arr.push(i);

    }

    return arr;
}

function checkWinner(board, player) {

    return winPatterns.some(pattern => {

        return pattern.every(index => board[index] === player);

    });

}

function isDraw(board) {

    return board.every(cell => cell !== "");

}

function restartGame() {

    board = ["", "", "", "", "", "", "", "", ""];

    gameOver = false;

    statusText.textContent = "Your Turn (X)";

    cells.forEach(cell => {

        cell.textContent = "";

    });

}