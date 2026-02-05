// GENUARY 2026 - DAY 30
// It is not a bug, it is a feature

let DESSIN = 30;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  // "Accidentally" create interesting patterns from "bugs"
  
  // Bug 1: Forgot to initialize loop variable properly
  let x = NP/2;
  let y = NP/2;
  
  for (let i = 0; i < 500; i++) {
    // Bug 2: Used addition instead of assignment
    x += cos(i * 0.1) * 3;
    y += sin(i * 0.13) * 3;
    
    // Bug 3: Off-by-one error creates gaps
    if (i % 2 == 1) {
      if (i == 1) LPRINT(`M${int(x)},${int(y)}`);
      else LPRINT(`D${int(x)},${int(y)}`);
    }
    
    // Bug 4: Wrong operator creates spikes
    if (i % 50 == 0) {
      let bugX = x * 1.2;
      let bugY = y * 1.2;
      LPRINT(`D${int(bugX)},${int(bugY)}`);
      LPRINT(`D${int(x)},${int(y)}`);
    }
  }
  
  // Bug 5: Drew in wrong order
  for (let angle = 0; angle < 360; angle += 45) {
    let rad = angle * PI / 180;
    let r1 = NP * 0.1;
    let r2 = NP * 0.4;
    
    LPRINT(`M${int(NP/2 + r2 * cos(rad))},${int(NP/2 + r2 * sin(rad))}`);
    LPRINT(`D${int(NP/2 + r1 * cos(rad))},${int(NP/2 + r1 * sin(rad))}`);
  }
  
  TRACE2();
}
