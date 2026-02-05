// GENUARY 2026 - DAY 19
// 16x16

let DESSIN = 19;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  let gridSize = 16;
  let cellSize = NP / gridSize;
  
  // 16x16 binary pattern - creates a sprite-like image
  let pattern = [
    [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0],
    [1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1],
    [1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1],
    [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ];
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (pattern[j][i] == 1) {
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
