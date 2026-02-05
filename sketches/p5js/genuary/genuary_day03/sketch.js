// GENUARY 2026 - DAY 3
// Fibonacci Forever

let DESSIN = 3;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('GREEN');
  
  let fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  let scale = NP / 150;
  let x = NP/2, y = NP/2;
  let angle = 0;
  
  // Fibonacci squares spiral
  for (let i = 0; i < fib.length; i++) {
    let size = fib[i] * scale;
    
    // Draw square
    let corners = [];
    for (let c = 0; c < 4; c++) {
      let a = angle + c * PI/2;
      let dx = size * cos(a);
      let dy = size * sin(a);
      corners.push({x: x + dx, y: y + dy});
    }
    
    for (let c = 0; c <= 4; c++) {
      let corner = corners[c % 4];
      let px = int(corner.x);
      let py = int(corner.y);
      if (i == 0 && c == 0) LPRINT(`M${px},${py}`);
      else LPRINT(`D${px},${py}`);
    }
    
    // Draw Fibonacci spiral arc in square
    let arcSteps = 20;
    let arcRadius = size;
    for (let s = 0; s <= arcSteps; s++) {
      let t = s / arcSteps;
      let arcAngle = angle + t * PI/2;
      let arcX = int(x + arcRadius * cos(arcAngle));
      let arcY = int(y + arcRadius * sin(arcAngle));
      LPRINT(`D${arcX},${arcY}`);
    }
    
    // Move to next position
    x += size * cos(angle);
    y += size * sin(angle);
    angle += PI/2;
  }
  
  TRACE2();
}
