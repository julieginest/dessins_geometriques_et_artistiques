// GENUARY 2026 - DAY 8
// A City

let DESSIN = 8;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('RED');
  
  let buildingCount = 25;
  let horizon = NP * 0.7;
  
  for (let i = 0; i < buildingCount; i++) {
    let x = (i / buildingCount) * NP;
    let width = NP / buildingCount + RND(20);
    let height = RND(horizon * 0.6) + horizon * 0.1;
    let floors = int(height / 20);
    
    // Building outline
    LPRINT(`M${int(x)},${int(horizon)}`);
    LPRINT(`D${int(x)},${int(horizon - height)}`);
    LPRINT(`D${int(x + width)},${int(horizon - height)}`);
    LPRINT(`D${int(x + width)},${int(horizon)}`);
    
    // Windows
    for (let f = 0; f < floors; f++) {
      let windowY = horizon - (f + 1) * 20 + 5;
      let windowCount = int(width / 15);
      for (let w = 0; w < windowCount; w++) {
        let windowX = x + (w + 1) * (width / (windowCount + 1));
        
        if (RND(1) > 0.3) {
          LPRINT(`M${int(windowX-3)},${int(windowY-3)}`);
          LPRINT(`D${int(windowX+3)},${int(windowY-3)}`);
          LPRINT(`D${int(windowX+3)},${int(windowY+3)}`);
          LPRINT(`D${int(windowX-3)},${int(windowY+3)}`);
          LPRINT(`D${int(windowX-3)},${int(windowY-3)}`);
        }
      }
    }
  }
  
  TRACE2();
}
