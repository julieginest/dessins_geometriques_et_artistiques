// GENUARY 2026 - DAY 18
// Unexpected path - simple rule: turn 90° when hitting a multiple of 30 pixels

let DESSIN = 18;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('RED');
  
  let x = NP/2;
  let y = NP/2;
  let angle = 0;
  let stepSize = 5;
  let totalDistance = 0;
  
  LPRINT(`M${int(x)},${int(y)}`);
  
  for (let i = 0; i < 1000; i++) {
    x += stepSize * cos(angle);
    y += stepSize * sin(angle);
    totalDistance += stepSize;
    
    // Simple rule: turn when total distance is a multiple of 30
    if (int(totalDistance) % 30 == 0) {
      angle += PI/2;
    }
    
    // Bounce off edges
    if (x < 20 || x > NP - 20) {
      angle = PI - angle;
      x = constrain(x, 20, NP - 20);
    }
    if (y < 20 || y > NP - 20) {
      angle = -angle;
      y = constrain(y, 20, NP - 20);
    }
    
    LPRINT(`D${int(x)},${int(y)}`);
  }
  
  TRACE2();
}

function constrain(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
