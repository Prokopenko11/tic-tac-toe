let players = ['x', 'o'];
let activePlayer = 0;
let numberOfMoves = 0;

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  numberOfMoves = 0;
  renderBoard(board);
}

function click(rowNumber, columnNumber) {
  activePlayer = numberOfMoves % 2;
  board[rowNumber].splice(columnNumber, 1, players[activePlayer]);
  renderBoard(board);
  numberOfMoves += 1;

  if((board[rowNumber][0] === board[rowNumber][1]) && (board[rowNumber][1] === board[rowNumber][2])) {
    showWinner(activePlayer);
  } else if((board[0][columnNumber] === board[1][columnNumber]) && (board[1][columnNumber] === board[2][columnNumber])){
    showWinner(activePlayer);
  } else if((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[1][1] !== '') && (board[rowNumber][columnNumber] == board[0][0])) {
    showWinner(activePlayer);
  } else if((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[1][1] !== '') && (board[rowNumber][columnNumber] == board[0][2])) {
    showWinner(activePlayer);
  }
}
