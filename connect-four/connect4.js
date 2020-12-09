/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let WIDTH = 7;
let HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

const makeBoard = (height, width) => {
  let rowElements = [];
  for (let row = 0; row < height; row++) {
    let colElements = [];
    for (let col = 0; col < width; col++) {
      colElements.push(null);
    }
    rowElements.push(colElements)
  }
  return rowElements;
}
board = makeBoard(HEIGHT, WIDTH);

/** handleClick: handle click of column top to play piece */

const handleClick = (evt) => {
  // get x from ID of clicked cell
  const col = evt.target.id;

  // get next spot in column (if none, ignore click)
  const row = findSpotForCol(col);
  if (row === null) {
    return;
  }

  // place piece in board and add to HTML table
  board[row][col] = currPlayer;
  placeInTable(row, col);

  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  const isAllFilled = board.every(row => row.every((col) => col));
  if (isAllFilled) {
    return endGame(`Player ${currPlayer} lost!`);
  }

  // switch players
  switchPlayers();
}

const switchPlayers = () => currPlayer = currPlayer === 1 ? 2 : 1;

/** makeHtmlBoard: make HTML table and row of column tops. */
const makeHtmlBoard = (height, width) => {
  const htmlBoard = document.getElementById('board');

  /** Given the number of columns, this code creates the tr for the top
   * line that will be responsible for handling the clicks and all of the
   * tds inside it and assign them ids. */
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (let col = 0; col < width; col++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", `${col}`);
    top.append(headCell);
  }
  htmlBoard.append(top);

  /** Given the number of columns and the number of rows, this code creates
   * the trs and tds and append them to the board and assign them ids. */
  for (let row = 0; row < height; row++) {
    const rowElement = document.createElement("tr");
    for (let col = 0; col < width; col++) {
      const colElement = document.createElement("td");
      colElement.setAttribute("id", `${row}-${col}`);
      rowElement.append(colElement);
    }
    htmlBoard.append(rowElement);
  }
}

makeHtmlBoard(HEIGHT, WIDTH);

/** findSpotForCol: given column col, return top empty row (null if filled) */

const findSpotForCol = (col) => {
  for (let index = (HEIGHT - 1); index >= 0; index--) {
    if (!board[index][col]) {
      return index
    }
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */

const placeInTable = (row, col) => {
  // TODO: make a div and insert into correct table cell
  const cell = document.getElementById(`${row}-${col}`);
  const newDiv = document.createElement('div');
  newDiv.classList.add('piece', `p${currPlayer}`);
  cell.append(newDiv);
}

/** endGame: announce game end */

const endGame = msg => alert(msg);

/** checkForWin: check board cell-by-cell for "does a win start here?" */

const checkForWin = () => {
  const _win = (cells) => {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

/** For every row in the board, the code bellow checks if there is 4 matching
 * color cells horizontally, vertically and diagonally using y and x to add
 * set coordinates. If there is 4 matching colors in any direction, it
 * returns true. */

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

