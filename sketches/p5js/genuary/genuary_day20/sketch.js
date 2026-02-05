// GENUARY 2026 - DAY 20
// One line - continuous path

let DESSIN = 20;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('NEW_BLUE');
  
  // Hilbert curve - a single continuous line filling space
  let order = 5;
  let totalPoints = Math.pow(4, order);
  let points = [];
  
  for (let i = 0; i < totalPoints; i++) {
    let h = hilbert2d(i, order);
    points.push(h);
  }
  
  // Scale to canvas
  let maxCoord = Math.pow(2, order) - 1;
  let margin = 40;
  let scale = (NP - margin * 2) / maxCoord;
  
  for (let i = 0; i < points.length; i++) {
    let x = int(margin + points[i][0] * scale);
    let y = int(margin + points[i][1] * scale);
    
    if (i == 0) LPRINT(`M${x},${y}`);
    else LPRINT(`D${x},${y}`);
  }
  
  TRACE2();
}

function hilbert2d(index, order) {
  let positions = [[0, 0], [0, 1], [1, 1], [1, 0]];
  let x = 0, y = 0;
  
  for (let i = 0; i < order; i++) {
    let len = Math.pow(2, i);
    let quad = Math.floor(index / Math.pow(4, order - i - 1)) % 4;
    
    let rx = (quad & 1) ? 1 : 0;
    let ry = (quad & 2) ? 1 : 0;
    
    if (ry == 0) {
      if (rx == 1) {
        x = len - 1 - x;
        y = len - 1 - y;
      }
      let temp = x;
      x = y;
      y = temp;
    }
    
    x += rx * len;
    y += ry * len;
  }
  
  return [x, y];
}
