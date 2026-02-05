// GENUARY 2026 - DAY 22
// Pen plotter ready - optimized single-path drawing

let DESSIN = 22;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  // Plotter-friendly: no overlapping lines, single continuous path when possible
  let layers = 8;
  let centerX = NP/2;
  let centerY = NP/2;
  
  for (let layer = 0; layer < layers; layer++) {
    let r = (layer + 1) * (NP * 0.4 / layers);
    let sides = 6 + layer;
    
    for (let i = 0; i <= sides; i++) {
      let angle = (i / sides) * 2 * PI;
      let x = int(centerX + r * cos(angle));
      let y = int(centerY + r * sin(angle));
      
      if (layer == 0 && i == 0) LPRINT(`M${x},${y}`);
      else if (i == 0) LPRINT(`M${x},${y}`);
      else LPRINT(`D${x},${y}`);
    }
  }
  
  // Add connecting radials for visual interest
  let radials = 12;
  for (let i = 0; i < radials; i++) {
    let angle = (i / radials) * 2 * PI;
    let r1 = NP * 0.1;
    let r2 = NP * 0.4;
    
    let x1 = int(centerX + r1 * cos(angle));
    let y1 = int(centerY + r1 * sin(angle));
    let x2 = int(centerX + r2 * cos(angle));
    let y2 = int(centerY + r2 * sin(angle));
    
    LPRINT(`M${x1},${y1}`);
    LPRINT(`D${x2},${y2}`);
  }
  
  TRACE2();
}
