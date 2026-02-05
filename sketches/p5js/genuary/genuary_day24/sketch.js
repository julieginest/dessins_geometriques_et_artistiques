// GENUARY 2026 - DAY 24
// Perfectionist nightmare - intentionally imperfect

let DESSIN = 24;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('RED');
  
  // Grid that's ALMOST perfect but subtly wrong
  let gridSize = 10;
  let cellSize = NP / gridSize;
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      
      // Add tiny random offsets
      let offsetX = (RND(1) - 0.5) * 3;
      let offsetY = (RND(1) - 0.5) * 3;
      
      // Occasionally make a cell obviously wrong
      if (RND(1) > 0.92) {
        offsetX *= 5;
        offsetY *= 5;
      }
      
      LPRINT(`M${int(x + offsetX)},${int(y + offsetY)}`);
      LPRINT(`D${int(x + cellSize + offsetX)},${int(y + offsetY)}`);
      LPRINT(`D${int(x + cellSize + offsetX)},${int(y + cellSize + offsetY)}`);
      LPRINT(`D${int(x + offsetX)},${int(y + cellSize + offsetY)}`);
      LPRINT(`D${int(x + offsetX)},${int(y + offsetY)}`);
    }
  }
  
  // One line that doesn't quite connect
  LPRINT(`M${int(NP*0.2)},${int(NP*0.5)}`);
  LPRINT(`D${int(NP*0.79)},${int(NP*0.5)}`);
  
  TRACE2();
}
