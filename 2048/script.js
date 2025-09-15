/*
2 → #a0a0a0 (soft silver, barely glowing)
4 → #d0d0d0 (brighter silver/white)
8 → #5fc9f8 (cool cyan glow)
16 → #42f5b3 (mint green glow)
32 → #f7d774 (golden glow)
64 → #f79a63 (warm orange glow)
128 → #f76363 (bright red, danger vibes)
256 → #d94ef7 (purple glow 👑)
512 → #8c4ef7 (deep violet)
1024 → #4ef7e0 (aqua neon)
2048 → #ffffff (pure white, god tile ✨)
*/

let arr = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
const cells = document.querySelectorAll(".cell");
let score = document.getElementById("currentScore"); 
let currScore = 0; 

updateCellColor(); 
fillCell(); 

// keypress event 
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    setTimeout(() => {
      moveUp();
      score.textContent = currScore;
      if (isWinner()) {
        alert("Congratulations, You Win !!"); 
      }
    },100); 
    fillCell(); 
  } else if (event.key === "ArrowDown") {
    setTimeout(() => {
      moveDown();
      score.textContent = currScore; 
      if (isWinner()) {
        alert("Congratulations, You Win!!"); 
      }
    },100); 
    fillCell();  
  } else if (event.key === "ArrowLeft") {
    setTimeout(() => { 
      moveLeft();
      score.textContent = currScore; 
      if (isWinner()) {
        alert("Congratulations, You Win!!"); 
      } 
    },100); 
    fillCell();  
  } else if (event.key === "ArrowRight") {
    setTimeout(() => {
      moveRight();
      score.textContent = currScore; 
      if (isWinner()) {
        alert("Congratulations, You Win!!"); 
      } 
    },100);  
    fillCell();  
  }
  else {
    return; 
  }
}); 

// fill random cell after 1 s 
function fillCell() {
  setTimeout(() => {
    fillRandomCell();  
  }, 400); 
}

// moving the content 
function moveLeft() {
  for (let i = 0; i <= 3; i++) {
    arr[i] = moveRowLeft(arr[i]); 
  }
  updateCells();
  updateCellColor(); 
}

function moveRight() {
  for (let i = 0; i <= 3; i++) {
    arr[i] = moveRowRight(arr[i]);  
  }
  updateCells();
  updateCellColor(); 
}

function moveUp() {
  for (let col = 0; col < 4; col++) {
    let newCol = moveColUp(col); 
    for (let row = 0; row < 4; row++) {
      arr[row][col] = newCol[row]; 
    }
  }
  updateCells(); 
  updateCellColor(); 
}

function moveDown() {
  for (let col = 0; col < 4; col++) {
    let newCol = moveColDown(col);  
    for (let row = 0; row < 4; row++) {
      arr[row][col] = newCol[row];  
    }
  }
  updateCells(); 
  updateCellColor(); 
}

// generate random index
function fillRandomCell () {
  if (!emptyCell()) {
    if (isGameOver()) {
      alert("Game Over!!"); 
      return; 
    } else {
      return; 
    }
  }
  
  let emptyCells = []; 
  for (let i = 0; i < 16; i++) {
    if (cells[i].textContent === "") {
      emptyCells.push(i); 
    } 
  }
  
  // picking random idx from emptyCells 
  let idx = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  let value = Math.random() < 0.9 ? 2 : 4;
  cells[idx].textContent = value; 
  let row = Math.floor(idx/4); 
  let col = idx % 4; 
  arr[row][col] = value; 

  updateCellColor(); 
}

// check for empty cells 
function emptyCell() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") return true;
  }
  return false;
}

// update cells 
function updateCells() {
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      let idx = i * 4 + j; 
      if (arr[i][j] == 0) {
        cells[idx].textContent = ""; 
      }
      else {
        cells[idx].textContent = arr[i][j]; 
      }
    }
  }
  updateCellColor(); 
}

// move row to left 
function moveRowLeft(row) {
  let newRow = row.filter(x => x != 0); 
  
  // merge adjacent equal tiles 
  for (let i = 0; i < newRow.length-1; i++) {
    if (newRow[i] === newRow[i+1]) {
      newRow[i] *= 2;  
      newRow[i+1] = 0;
      currScore += newRow[i];
      i++;  
    }
  }
  // compress again 
  newRow = newRow.filter(x => x != 0); 
  while (newRow.length < 4) {
    newRow.push(0);
  }
  return newRow; 
}

// move row to right 
function moveRowRight(row) {
  let newRow = row.filter(x => x != 0); 
  for (let i = newRow.length-1; i > 0; i--) {
    if (newRow[i] === newRow[i-1]) {
      newRow[i] *= 2; 
      newRow[i-1] = 0; 
      currScore += newRow[i];  
      i--; 
    }
  }
  // filter again
  newRow = newRow.filter(x => x != 0); 
  while (newRow.length < 4) {
    newRow.unshift(0); 
  }
  return newRow; 
}

// move col up 
function moveColUp(col) {
  let newCol = [];  
  for (let row = 0; row < 4; row++) {
    newCol.push(arr[row][col]); 
  }
  newCol = newCol.filter(x => x != 0); 
  for (let i = 0; i < newCol.length-1; i++) {
    if (newCol[i] === newCol[i+1]){ 
      newCol[i] *= 2;
      newCol[i+1] = 0; 
      currScore += newCol[i];  
      i++; 
    }
  }
  // compress
  newCol = newCol.filter(x => x != 0); 
  while (newCol.length < 4) {
    newCol.push(0);  
  }
  return newCol; 
}
  
// move col down 
function moveColDown(col) {
  let newCol = []; 
  for (let row = 0; row < 4; row++) {
    newCol.push(arr[row][col]); 
  }
  // filter zeros 
  newCol = newCol.filter(x => x != 0); 
  for (let i = newCol.length-1; i > 0; i--) {
    if (newCol[i] === newCol[i-1]) {
      newCol[i] *= 2; 
      newCol[i-1] = 0; 
      currScore += newCol[i];  
      i--; 
    }
  }
  // filter again 
  newCol = newCol.filter(x => x != 0); 
  while (newCol.length < 4) {
    newCol.unshift(0); 
  }
  return newCol; 
}

// changing cell colors 
function updateCellColor() {
  cells.forEach(cell => {
    if (cell.textContent === "") {
      cell.style.backgroundColor = "#2e2e2e"; 
    }
    else if (cell.textContent === "2") {
      cell.style.background = "#a0a0a0"; 
    }
    else if (cell.textContent === "4") {
      cell.style.background = "#d0d0d0"; 
    }
    else if (cell.textContent === "8") {
      cell.style.background = "#5fc9f8";
    }
    else if (cell.textContent === "16") {
      cell.style.background = "#42f5b3"; 
    }
    else if (cell.textContent === "32") {
      cell.style.background = "#f7d774";
    }
    else if (cell.textContent === "64") {
      cell.style.background = "#f79a63"; 
    }
    else if (cell.textContent === "128") {
      cell.style.background = "#f76363"; 
    }
    else if (cell.textContent === "256") {
      cell.style.background = "#d94ef7"; 
    }
    else if (cell.textContent === "512") {
      cell.style.background = "#8c4ef7";
    }
    else if (cell.textContent === "1024") {
      cell.style.background = "#4ef7e0";  
    }
    else if (cell.textContent === "2048") {
      cell.style.background = "#ffffff"; 
    }
  }); 
}

function isWinner() {
  cells.forEach(cell => {
    if (cell.textContent === "2048") {
      return true; 
    }
  }); 
  return false; 
}

function isGameOver() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (arr[i][j] === 0) return false; 
    }
  }
  //horizontal same adjacent 
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === arr[i][j+1]) return false; 
    }
  }
  
  // checking vertical adjacents
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 3; i++) {
      if (arr[i][j] === arr[i+1][j]) return false; 
    }
  }
  return true;  
}

