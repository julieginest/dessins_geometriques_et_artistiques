// GENUARY 2026 - DAY 16
// Order and disorder

let DESSIN = 16;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('GREEN');
  
  let gridSize = 12;
  let cellSize = NP / gridSize;
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cx = i * cellSize + cellSize/2;
      let cy = j * cellSize + cellSize/2;
      
      // Transition from order to chaos
      let distFromCenter = sqrt((i - gridSize/2)**2 + (j - gridSize/2)**2);
      let chaos = distFromCenter / (gridSize/2);
      
      if (chaos < 0.5) {
        // Ordered: perfect circles
        let r = cellSize * 0.3;
        for (let a = 0; a <= 60; a++) {
          let angle = (a / 60) * 2 * PI;
          let x = int(cx + r * cos(angle));
          let y = int(cy + r * sin(angle));
          if (a == 0) LPRINT(`M${x},${y}`);
          else LPRINT(`D${x},${y}`);
        }
      } else {
        // Chaotic: random polygons
        let sides = int(RND(5) + 3);
        let r = cellSize * (0.2 + RND(0.2));
        let angleOffset = RND(2 * PI);
        
        for (let a = 0; a <= sides; a++) {
          let angle = angleOffset + (a / sides) * 2 * PI;
          let radiusVar = r * (0.5 + RND(1));
          let x = int(cx + radiusVar * cos(angle));
          let y = int(cy + radiusVar * sin(angle));
          if (a == 0) LPRINT(`M${x},${y}`);
          else LPRINT(`D${x},${y}`);
        }
      }
    }
  }
  
  TRACE2();
}
