// GENUARY 2026 - DAY 7
// Boolean Algebra - XOR patterns

let DESSIN = 7;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  let gridSize = 16;
  let cellSize = NP / gridSize;
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      // XOR pattern: i XOR j determines if cell is filled
      if ((i ^ j) % 4 == 0) {
        let x = i * cellSize;
        let y = j * cellSize;
        
        // Draw X in cell
        LPRINT(`M${int(x)},${int(y)}`);
        LPRINT(`D${int(x+cellSize)},${int(y+cellSize)}`);
        LPRINT(`M${int(x+cellSize)},${int(y)}`);
        LPRINT(`D${int(x)},${int(y+cellSize)}`);
      }
      
      // AND pattern overlay
      if ((i & j) % 8 == 0 && i > 0 && j > 0) {
        let x = i * cellSize + cellSize/2;
        let y = j * cellSize + cellSize/2;
        let r = cellSize/4;
        
        for (let a = 0; a < 360; a += 30) {
          let rad = a * PI / 180;
          let px = int(x + r * cos(rad));
          let py = int(y + r * sin(rad));
          if (a == 0) LPRINT(`M${px},${py}`);
          else LPRINT(`D${px},${py}`);
        }
      }
    }
  }
  
  TRACE2();
}
