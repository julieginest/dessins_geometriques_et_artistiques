// GENUARY 2026 - DAY 1
// One color, one shape

let DESSIN = 1;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('YELLOW');
  
  // Concentric circles exploring negative space
  let centerX = NP/2;
  let centerY = NP/2;
  let maxRadius = NP * 0.4;
  let numCircles = 12;
  
  for (let c = 0; c < numCircles; c++) {
    let r = maxRadius * (c + 1) / numCircles;
    let segments = 60;
    
    for (let i = 0; i <= segments; i++) {
      let angle = (i / segments) * 2 * PI;
      let x = int(centerX + r * cos(angle));
      let y = int(centerY + r * sin(angle));
      
      if (i == 0) LPRINT(`M${x},${y}`);
      else LPRINT(`D${x},${y}`);
    }
  }
  
  TRACE();
}
