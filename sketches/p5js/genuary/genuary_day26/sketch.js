// GENUARY 2026 - DAY 26
// Recursive Grids

let DESSIN = 26;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  drawRecursiveGrid(0, 0, NP, NP, 4);
  
  TRACE2();
}

function drawRecursiveGrid(x, y, w, h, depth) {
  if (depth <= 0 || w < 20 || h < 20) return;
  
  // Draw border
  LPRINT(`M${int(x)},${int(y)}`);
  LPRINT(`D${int(x+w)},${int(y)}`);
  LPRINT(`D${int(x+w)},${int(y+h)}`);
  LPRINT(`D${int(x)},${int(y+h)}`);
  LPRINT(`D${int(x)},${int(y)}`);
  
  // Subdivide into 2x2 or 3x3 grid
  let subdivisions = RND(1) > 0.5 ? 2 : 3;
  let cellW = w / subdivisions;
  let cellH = h / subdivisions;
  
  for (let i = 0; i < subdivisions; i++) {
    for (let j = 0; j < subdivisions; j++) {
      // Randomly recurse on some cells
      if (RND(1) > 0.3) {
        drawRecursiveGrid(
          x + i * cellW,
          y + j * cellH,
          cellW,
          cellH,
          depth - 1
        );
      }
    }
  }
}
