// GENUARY 2026 - DAY 17
// Wallpaper group - p4m symmetry

let DESSIN = 17;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('YELLOW');
  
  let tileSize = 60;
  let tilesX = ceil(NP / tileSize) + 1;
  let tilesY = ceil(NP / tileSize) + 1;
  
  for (let i = 0; i < tilesX; i++) {
    for (let j = 0; j < tilesY; j++) {
      drawP4MTile(i * tileSize, j * tileSize, tileSize);
    }
  }
  
  TRACE2();
}

function drawP4MTile(ox, oy, size) {
  // Draw fundamental domain with 4-fold rotational symmetry + mirror
  let cx = ox + size/2;
  let cy = oy + size/2;
  
  // Create a simple motif
  let motif = [
    [0, 0],
    [size*0.3, 0],
    [size*0.3, size*0.2],
    [0, size*0.2]
  ];
  
  // Apply p4m symmetry (4 rotations + reflections)
  for (let rot = 0; rot < 4; rot++) {
    let angle = rot * PI/2;
    
    // Original
    for (let k = 0; k <= motif.length; k++) {
      let p = motif[k % motif.length];
      let x = p[0] * cos(angle) - p[1] * sin(angle);
      let y = p[0] * sin(angle) + p[1] * cos(angle);
      
      if (k == 0) LPRINT(`M${int(cx + x)},${int(cy + y)}`);
      else LPRINT(`D${int(cx + x)},${int(cy + y)}`);
    }
    
    // Mirrored
    for (let k = 0; k <= motif.length; k++) {
      let p = motif[k % motif.length];
      let x = -p[0] * cos(angle) - p[1] * sin(angle);
      let y = -p[0] * sin(angle) + p[1] * cos(angle);
      
      if (k == 0) LPRINT(`M${int(cx + x)},${int(cy + y)}`);
      else LPRINT(`D${int(cx + x)},${int(cy + y)}`);
    }
  }
}
