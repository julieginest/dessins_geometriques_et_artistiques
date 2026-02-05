// GENUARY 2026 - DAY 31
// GLSL day - simulated shader effect using geometry

let DESSIN = 31;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('RED');
  
  // Simulate a shader raymarch effect using line density
  let resolution = 60;
  let cellSize = NP / resolution;
  
  for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
      // UV coordinates (0 to 1)
      let u = i / resolution;
      let v = j / resolution;
      
      // Center coordinates
      let x = (u - 0.5) * 2;
      let y = (v - 0.5) * 2;
      
      // Distance field (circle SDF)
      let dist = sqrt(x*x + y*y) - 0.5;
      
      // Raymarch-like effect: draw lines based on distance
      let intensity = 1.0 / (1.0 + abs(dist) * 10);
      
      if (intensity > 0.3) {
        let cx = i * cellSize + cellSize/2;
        let cy = j * cellSize + cellSize/2;
        
        // Draw cross pattern based on intensity
        let size = cellSize * intensity * 0.8;
        
        LPRINT(`M${int(cx-size)},${int(cy)}`);
        LPRINT(`D${int(cx+size)},${int(cy)}`);
        LPRINT(`M${int(cx)},${int(cy-size)}`);
        LPRINT(`D${int(cx)},${int(cy+size)}`);
      }
    }
  }
  
  TRACE2();
}
