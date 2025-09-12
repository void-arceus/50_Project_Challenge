const cells = document.querySelectorAll(".cell");
let displayTurn = document.getElementById("displayTurn");
let displayWinner = document.getElementById("displayWinner"); 
let newGameBtn = document.getElementById("newGame"); 
let arr = ['', '', '', '', '', '', '', '', ''];

let xTurn = true;

cells.forEach((cell, idx) => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "") {
      return;
    }
    if (xTurn) {
      cell.textContent = "X";
      arr[idx] = "X";
      // check winner 
      let winner = checkWinner(arr);
      if (winner !== "") {
        displayWinner.textContent = `${winner}-wins`; 
        displayTurn.textContent = "O"; 
        disableClick(cells);
        return;
      }
      else if (isDraw(arr)) {
        displayWinner.textContent = `Its a draw!`;
        displayTurn.textContent = "O"; 
        disableClick(cells);
        return;
      }
      xTurn = false;
      displayTurn.textContent = "O";
    }
    else {
      cell.textContent = "O";
      arr[idx] = "O";
      // check winner 
      let winner = checkWinner(arr);
      if (winner !== "") {
        displayWinner.textContent = `${winner}-wins`;
        displayTurn.textContent = "X"; 
        disableClick(cells); 
        return;
      }
      else if (isDraw(arr)) {
        displayWinner.textContent = `Its a draw`;
        displayTurn.textContent = "X";   
        disableClick(cells); 
        return;
      }
      xTurn = true;
      displayTurn.textContent = "X"; 
    }
  });
});
 
function checkWinner(arr) {
  if (arr[0] !== "" && arr[0] === arr[1] && arr[1] === arr[2]) {
    return arr[0];
  }
  else if (arr[3] !== "" && arr[3] === arr[4] && arr[4] === arr[5]) {
    return arr[3];
  }
  else if (arr[6] !== "" && arr[6] === arr[7] && arr[7] === arr[8]) {
    return arr[6];
  }
  else if (arr[0] !== "" && arr[0] === arr[3] && arr[3] === arr[6]) {
    return arr[0];
  }
  else if (arr[1] !== "" && arr[1] === arr[4] && arr[4] === arr[7]) {
    return arr[1];
  }
  else if (arr[2] !== "" && arr[2] === arr[5] && arr[5] === arr[8]) {
    return arr[2];
  }
  else if (arr[0] !== "" && arr[0] === arr[4] && arr[4] === arr[8]) {
    return arr[0];
  }
  else if (arr[2] !== "" && arr[2] === arr[4] && arr[4] === arr[6]) {
    return arr[2];
  }
  return "";
}

function clearCells(cells, arr) {
  cells.forEach((cell, idx) => {
    cell.textContent = '';
    arr[idx] = '';
  });
}

function isDraw(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") return false;
  }
  return true;
}

function disableClick(cells) {
  cells.forEach(cell => cell.classList.add("disabled")); 
}

function enableClick(cells) {
  cells.forEach(cell => cell.classList.remove("disabled"));
}

newGameBtn.addEventListener("click", () => {
  displayWinner.textContent = ""; 
  displayTurn.textContent = "X"; 
  clearCells(cells, arr);
  enableClick(cells);
});