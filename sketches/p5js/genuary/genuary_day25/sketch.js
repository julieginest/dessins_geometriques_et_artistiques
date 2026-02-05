// GENUARY 2026 - DAY 25
// Organic Geometry - geometric shapes behaving organically

let DESSIN = 25;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('GREEN');
  
  // Branch-like structure made from geometric shapes
  drawBranch(NP/2, NP*0.9, -PI/2, NP*0.15, 5);
  
  TRACE2();
}

function drawBranch(x, y, angle, length, depth) {
  if (depth <= 0 || length < 5) return;
  
  // Draw hexagon at branch point
  let hexSize = length * 0.3;
  for (let i = 0; i <= 6; i++) {
    let a = (i / 6) * 2 * PI;
    let hx = int(x + hexSize * cos(a));
    let hy = int(y + hexSize * sin(a));
    if (i == 0) LPRINT(`M${hx},${hy}`);
    else LPRINT(`D${hx},${hy}`);
  }
  
  // Draw line to next position
  let endX = x + length * cos(angle);
  let endY = y + length * sin(angle);
  
  LPRINT(`M${int(x)},${int(y)}`);
  LPRINT(`D${int(endX)},${int(endY)}`);
  
  // Recursively branch
  let angleOffset = PI/6 + RND(PI/8);
  let lengthFactor = 0.65 + RND(0.1);
  
  drawBranch(endX, endY, angle - angleOffset, length * lengthFactor, depth - 1);
  drawBranch(endX, endY, angle + angleOffset, length * lengthFactor, depth - 1);
}
