// GENUARY 2026 - DAY 21
// Bauhaus Poster

let DESSIN = 21;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('YELLOW');
  
  // Bauhaus style: circles, squares, triangles, primary colors
  
  // Large circle
  let cx = NP * 0.3;
  let cy = NP * 0.35;
  let r = NP * 0.25;
  
  for (let i = 0; i <= 60; i++) {
    let angle = (i / 60) * 2 * PI;
    let x = int(cx + r * cos(angle));
    let y = int(cy + r * sin(angle));
    if (i == 0) LPRINT(`M${x},${y}`);
    else LPRINT(`D${x},${y}`);
  }
  
  // Rectangle
  let rx = NP * 0.55;
  let ry = NP * 0.15;
  let rw = NP * 0.35;
  let rh = NP * 0.25;
  
  LPRINT(`M${int(rx)},${int(ry)}`);
  LPRINT(`D${int(rx+rw)},${int(ry)}`);
  LPRINT(`D${int(rx+rw)},${int(ry+rh)}`);
  LPRINT(`D${int(rx)},${int(ry+rh)}`);
  LPRINT(`D${int(rx)},${int(ry)}`);
  
  // Triangle
  let tx = NP * 0.65;
  let ty = NP * 0.55;
  let tsize = NP * 0.3;
  
  LPRINT(`M${int(tx)},${int(ty+tsize)}`);
  LPRINT(`D${int(tx+tsize/2)},${int(ty)}`);
  LPRINT(`D${int(tx+tsize)},${int(ty+tsize)}`);
  LPRINT(`D${int(tx)},${int(ty+tsize)}`);
  
  // Horizontal lines (typography element)
  for (let i = 0; i < 5; i++) {
    let ly = NP * 0.75 + i * 12;
    LPRINT(`M${int(NP*0.1)},${int(ly)}`);
    LPRINT(`D${int(NP*0.5)},${int(ly)}`);
  }
  
  // Diagonal accent
  LPRINT(`M${int(NP*0.1)},${int(NP*0.6)}`);
  LPRINT(`D${int(NP*0.4)},${int(NP*0.75)}`);
  
  TRACE2();
}
