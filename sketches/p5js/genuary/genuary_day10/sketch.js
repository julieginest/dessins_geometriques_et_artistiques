// GENUARY 2026 - DAY 10
// Polar Coordinates

let DESSIN = 10;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('GREEN');
  
  let cx = NP/2, cy = NP/2;
  let R1 = NP * 0.35;
  let R2 = NP * 0.15;
  let k = 5;
  
  // Rose curve: r = R1 * cos(k * θ) + R2
  let steps = 360 * k;
  
  for (let i = 0; i <= steps; i++) {
    let theta = (i / steps) * 2 * PI * k;
    let r = R1 * cos(k * theta / k) + R2;
    let x = int(cx + r * cos(theta));
    let y = int(cy + r * sin(theta));
    
    if (i == 0) LPRINT(`M${x},${y}`);
    else LPRINT(`D${x},${y}`);
  }
  
  // Add radial lines
  for (let angle = 0; angle < 360; angle += 30) {
    let rad = angle * PI / 180;
    let x1 = int(cx);
    let y1 = int(cy);
    let x2 = int(cx + NP * 0.4 * cos(rad));
    let y2 = int(cy + NP * 0.4 * sin(rad));
    
    LPRINT(`M${x1},${y1}`);
    LPRINT(`D${x2},${y2}`);
  }
  
  TRACE2();
}
