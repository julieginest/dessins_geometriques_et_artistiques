// GENUARY 2026 - DAY 23
// Transparency - layered overlapping shapes

let DESSIN = 23;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('GREEN');
  
  // Multiple overlapping circles to suggest transparency
  let circles = [
    {x: NP*0.35, y: NP*0.35, r: NP*0.2},
    {x: NP*0.55, y: NP*0.35, r: NP*0.2},
    {x: NP*0.45, y: NP*0.52, r: NP*0.2},
    {x: NP*0.3, y: NP*0.6, r: NP*0.15},
    {x: NP*0.6, y: NP*0.6, r: NP*0.15}
  ];
  
  for (let circle of circles) {
    // Draw circle outline
    for (let i = 0; i <= 60; i++) {
      let angle = (i / 60) * 2 * PI;
      let x = int(circle.x + circle.r * cos(angle));
      let y = int(circle.y + circle.r * sin(angle));
      if (i == 0) LPRINT(`M${x},${y}`);
      else LPRINT(`D${x},${y}`);
    }
    
    // Add internal rings to show depth
    for (let ring = 1; ring <= 3; ring++) {
      let r = circle.r * (1 - ring * 0.2);
      for (let i = 0; i <= 60; i++) {
        let angle = (i / 60) * 2 * PI;
        let x = int(circle.x + r * cos(angle));
        let y = int(circle.y + r * sin(angle));
        if (i == 0) LPRINT(`M${x},${y}`);
        else LPRINT(`D${x},${y}`);
      }
    }
  }
  
  TRACE2();
}
