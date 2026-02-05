// GENUARY 2026 - DAY 12
// Boxes Only

let DESSIN = 12;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('YELLOW');
  
  // Isometric projection
  let isoX = (x, y) => x - y;
  let isoY = (x, y, z) => (x + y) * 0.5 - z;
  
  let boxSize = 40;
  let gridSize = 6;
  let offsetX = NP/2;
  let offsetY = NP/2;
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let height = RND(3) + 1;
      
      for (let h = 0; h < height; h++) {
        let x = i * boxSize;
        let y = j * boxSize;
        let z = h * boxSize;
        
        // Top face
        let p1x = int(offsetX + isoX(x, y));
        let p1y = int(offsetY + isoY(x, y, z + boxSize));
        let p2x = int(offsetX + isoX(x + boxSize, y));
        let p2y = int(offsetY + isoY(x + boxSize, y, z + boxSize));
        let p3x = int(offsetX + isoX(x + boxSize, y + boxSize));
        let p3y = int(offsetY + isoY(x + boxSize, y + boxSize, z + boxSize));
        let p4x = int(offsetX + isoX(x, y + boxSize));
        let p4y = int(offsetY + isoY(x, y + boxSize, z + boxSize));
        
        LPRINT(`M${p1x},${p1y}`);
        LPRINT(`D${p2x},${p2y}`);
        LPRINT(`D${p3x},${p3y}`);
        LPRINT(`D${p4x},${p4y}`);
        LPRINT(`D${p1x},${p1y}`);
        
        // Left face
        let p5x = int(offsetX + isoX(x, y));
        let p5y = int(offsetY + isoY(x, y, z));
        
        LPRINT(`M${p1x},${p1y}`);
        LPRINT(`D${p5x},${p5y}`);
        
        // Right face
        let p6x = int(offsetX + isoX(x + boxSize, y));
        let p6y = int(offsetY + isoY(x + boxSize, y, z));
        
        LPRINT(`M${p2x},${p2y}`);
        LPRINT(`D${p6x},${p6y}`);
      }
    }
  }
  
  TRACE2();
}
