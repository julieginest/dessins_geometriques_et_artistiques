// GENUARY 2026 - DAY 4
// Lowres

let DESSIN = 4;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  let pixelSize = 30;
  let gridSize = floor(NP / pixelSize);
  
  // Create pixelated Truchet-like tiles
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * pixelSize + pixelSize/2;
      let y = j * pixelSize + pixelSize/2;
      
      // Random pattern: diagonal lines
      if (RND(1) > 0.5) {
        let x1 = int(i * pixelSize);
        let y1 = int(j * pixelSize);
        let x2 = int(i * pixelSize + pixelSize);
        let y2 = int(j * pixelSize + pixelSize);
        
        LPRINT(`M${x1},${y1}`);
        LPRINT(`D${x2},${y2}`);
      } else {
        let x1 = int(i * pixelSize + pixelSize);
        let y1 = int(j * pixelSize);
        let x2 = int(i * pixelSize);
        let y2 = int(j * pixelSize + pixelSize);
        
        LPRINT(`M${x1},${y1}`);
        LPRINT(`D${x2},${y2}`);
      }
    }
  }
  
  TRACE2();
}
