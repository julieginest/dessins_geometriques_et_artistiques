// GENUARY 2026 - DAY 15
// Invisible object - only shadows visible

let DESSIN = 15;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('RED');
  
  // Light source position
  let lightX = NP * 0.3;
  let lightY = NP * 0.2;
  
  // Invisible cube - draw only its shadow
  let cubeSize = 80;
  let cubeX = NP/2;
  let cubeY = NP/2;
  let cubeZ = 100;
  
  // Project shadow onto ground plane
  let shadowOffset = 150;
  
  // Cube corners (invisible)
  let corners = [
    [cubeX - cubeSize/2, cubeY - cubeSize/2, cubeZ],
    [cubeX + cubeSize/2, cubeY - cubeSize/2, cubeZ],
    [cubeX + cubeSize/2, cubeY + cubeSize/2, cubeZ],
    [cubeX - cubeSize/2, cubeY + cubeSize/2, cubeZ],
    [cubeX - cubeSize/2, cubeY - cubeSize/2, cubeZ + cubeSize],
    [cubeX + cubeSize/2, cubeY - cubeSize/2, cubeZ + cubeSize],
    [cubeX + cubeSize/2, cubeY + cubeSize/2, cubeZ + cubeSize],
    [cubeX - cubeSize/2, cubeY + cubeSize/2, cubeZ + cubeSize]
  ];
  
  // Project shadows
  let shadows = [];
  for (let corner of corners) {
    let dx = corner[0] - lightX;
    let dy = corner[1] - lightY;
    let dz = corner[2];
    
    let t = (shadowOffset - lightY) / dy;
    let sx = int(lightX + dx * t * 0.5);
    let sy = int(shadowOffset + (corner[1] - lightY) * 0.5);
    
    shadows.push([sx, sy]);
  }
  
  // Draw shadow outline
  let shadowIndices = [0, 1, 2, 3, 0, 4, 5, 1];
  for (let i = 0; i < shadowIndices.length; i++) {
    let idx = shadowIndices[i];
    let x = shadows[idx][0];
    let y = shadows[idx][1];
    
    if (i == 0) LPRINT(`M${x},${y}`);
    else LPRINT(`D${x},${y}`);
  }
  
  LPRINT(`M${shadows[4][0]},${shadows[4][1]}`);
  LPRINT(`D${shadows[5][0]},${shadows[5][1]}`);
  LPRINT(`D${shadows[6][0]},${shadows[6][1]}`);
  LPRINT(`D${shadows[7][0]},${shadows[7][1]}`);
  LPRINT(`D${shadows[4][0]},${shadows[4][1]}`);
  
  LPRINT(`M${shadows[2][0]},${shadows[2][1]}`);
  LPRINT(`D${shadows[6][0]},${shadows[6][1]}`);
  LPRINT(`M${shadows[3][0]},${shadows[3][1]}`);
  LPRINT(`D${shadows[7][0]},${shadows[7][1]}`);
  
  TRACE2();
}
