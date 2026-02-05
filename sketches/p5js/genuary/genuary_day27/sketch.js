// GENUARY 2026 - DAY 27
// Lifeform - growing organic structure

let DESSIN = 27;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('NEW_YELLOW');
  
  // Start with a seed
  let points = [{x: NP/2, y: NP/2, angle: -PI/2, generation: 0}];
  let maxGen = 8;
  let growthRate = 20;
  
  for (let gen = 0; gen < maxGen; gen++) {
    let newPoints = [];
    
    for (let p of points) {
      if (p.generation == gen) {
        // Grow outward
        let length = growthRate * (1 + gen * 0.3);
        let endX = p.x + length * cos(p.angle);
        let endY = p.y + length * sin(p.angle);
        
        LPRINT(`M${int(p.x)},${int(p.y)}`);
        LPRINT(`D${int(endX)},${int(endY)}`);
        
        // Branch at random angles
        let numBranches = gen < 3 ? 3 : 2;
        for (let b = 0; b < numBranches; b++) {
          let newAngle = p.angle + (b - (numBranches-1)/2) * PI/4 + (RND(1) - 0.5) * PI/8;
          
          if (endX > 20 && endX < NP-20 && endY > 20 && endY < NP-20) {
            newPoints.push({
              x: endX,
              y: endY,
              angle: newAngle,
              generation: gen + 1
            });
          }
        }
        
        // Draw growth node (small circle)
        let nodeR = 5;
        for (let a = 0; a <= 12; a++) {
          let angle = (a / 12) * 2 * PI;
          let nx = int(endX + nodeR * cos(angle));
          let ny = int(endY + nodeR * sin(angle));
          if (a == 0) LPRINT(`M${nx},${ny}`);
          else LPRINT(`D${nx},${ny}`);
        }
      }
    }
    
    points = points.concat(newPoints);
  }
  
  TRACE2();
}
