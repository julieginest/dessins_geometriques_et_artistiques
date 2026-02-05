// GENUARY 2026 - DAY 2
// 12 Principles of Animation - Squash & Stretch

let DESSIN = 2;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('RED');
  
  let numBounces = 8;
  let bounceHeight = [NP*0.7, NP*0.5, NP*0.35, NP*0.23, NP*0.15, NP*0.09, NP*0.05, NP*0.02];
  
  for (let b = 0; b < numBounces; b++) {
    let startX = NP * 0.1 + (b * NP * 0.8 / numBounces);
    let endX = startX + NP * 0.8 / numBounces;
    let height = bounceHeight[b];
    
    // Draw parabolic arc
    let steps = 20;
    for (let i = 0; i <= steps; i++) {
      let t = i / steps;
      let x = int(startX + (endX - startX) * t);
      // Parabolic motion
      let y = int(NP * 0.8 - height * (1 - 4*(t - 0.5)*(t - 0.5)));
      
      if (b == 0 && i == 0) LPRINT(`M${x},${y}`);
      else LPRINT(`D${x},${y}`);
    }
    
    // Squash at bottom (ellipse)
    if (b < numBounces - 1) {
      let squashWidth = 15 * (numBounces - b) / numBounces;
      let squashHeight = 5;
      for (let a = 0; a < 360; a += 20) {
        let rad = a * PI / 180;
        let sx = int(endX + squashWidth * cos(rad));
        let sy = int(NP * 0.8 + squashHeight * sin(rad));
        LPRINT(`D${sx},${sy}`);
      }
    }
  }
  
  TRACE2();
}
