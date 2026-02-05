// GENUARY 2026 - DAY 9
// Crazy Automaton - Custom CA rules

let DESSIN = 9;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  let gridSize = 60;
  let cellSize = NP / gridSize;
  let cells = [];
  let nextCells = [];
  
  // Initialize with random center
  for (let i = 0; i < gridSize; i++) {
    cells[i] = [];
    nextCells[i] = [];
    for (let j = 0; j < gridSize; j++) {
      let dist = sqrt((i - gridSize/2)**2 + (j - gridSize/2)**2);
      cells[i][j] = dist < 8 && RND(1) > 0.5 ? 1 : 0;
    }
  }
  
  // Run automaton for several generations
  for (let gen = 0; gen < 25; gen++) {
    for (let i = 1; i < gridSize - 1; i++) {
      for (let j = 1; j < gridSize - 1; j++) {
        let neighbors = 
          cells[i-1][j-1] + cells[i-1][j] + cells[i-1][j+1] +
          cells[i][j-1] + cells[i][j+1] +
          cells[i+1][j-1] + cells[i+1][j] + cells[i+1][j+1];
        
        // Crazy rule: survive with 2-4 neighbors, born with 3-5
        if (cells[i][j] == 1) {
          nextCells[i][j] = (neighbors >= 2 && neighbors <= 4) ? 1 : 0;
        } else {
          nextCells[i][j] = (neighbors >= 3 && neighbors <= 5) ? 1 : 0;
        }
      }
    }
    
    // Swap
    let temp = cells;
    cells = nextCells;
    nextCells = temp;
  }
  
  // Draw final state
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (cells[i][j] == 1) {
        let x = i * cellSize;
        let y = j * cellSize;
        
        LPRINT(`M${int(x)},${int(y)}`);
        LPRINT(`D${int(x+cellSize)},${int(y)}`);
        LPRINT(`D${int(x+cellSize)},${int(y+cellSize)}`);
        LPRINT(`D${int(x)},${int(y+cellSize)}`);
        LPRINT(`D${int(x)},${int(y)}`);
      }
    }
  }
  
  TRACE2();
}
