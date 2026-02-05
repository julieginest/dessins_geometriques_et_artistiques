// GENUARY 2026 - DAY 14
// Everything Fits Perfectly

let DESSIN = 14;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('NEW_BLUE');
  
  // Hexagonal tessellation
  let hexSize = 30;
  let hexHeight = hexSize * Math.sqrt(3);
  
  for (let row = 0; row < 12; row++) {
    for (let col = 0; col < 12; col++) {
      let x = col * hexSize * 1.5;
      let y = row * hexHeight + (col % 2) * hexHeight/2;
      
      if (x < NP && y < NP) {
        drawHexagon(x + NP*0.1, y + NP*0.1, hexSize);
      }
    }
  }
  
  TRACE2();
}

function drawHexagon(cx, cy, size) {
  for (let i = 0; i <= 6; i++) {
    let angle = (i / 6) * 2 * PI;
    let x = int(cx + size * cos(angle));
    let y = int(cy + size * sin(angle));
    
    if (i == 0) LPRINT(`M${x},${y}`);
    else LPRINT(`D${x},${y}`);
  }
}
