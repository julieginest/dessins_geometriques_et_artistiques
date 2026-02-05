// GENUARY 2026 - DAY 6
// Lights On/Off (press L to toggle)

let DESSIN = 6;
let NP = 480, PI = Math.PI;
let lightsOn = true;

function setup() {
  INIT();
  drawPattern();
}

function drawPattern() {
  OUTPUT = "";
  
  if (lightsOn) {
    PALETTE('YELLOW');
    // Day pattern: sun rays
    let cx = NP/2, cy = NP/2;
    let innerR = NP * 0.15;
    let outerR = NP * 0.45;
    
    for (let i = 0; i < 24; i++) {
      let angle = (i / 24) * 2 * PI;
      let x1 = int(cx + innerR * cos(angle));
      let y1 = int(cy + innerR * sin(angle));
      let x2 = int(cx + outerR * cos(angle));
      let y2 = int(cy + outerR * sin(angle));
      
      LPRINT(`M${x1},${y1}`);
      LPRINT(`D${x2},${y2}`);
    }
  } else {
    PALETTE('NEW_BLUE');
    // Night pattern: stars and moon
    let cx = NP/2, cy = NP/2;
    
    // Moon (crescent)
    let moonR = NP * 0.2;
    for (let i = 0; i <= 30; i++) {
      let angle = PI/4 + (i / 30) * 1.5 * PI;
      let x = int(cx + moonR * cos(angle));
      let y = int(cy + moonR * sin(angle));
      if (i == 0) LPRINT(`M${x},${y}`);
      else LPRINT(`D${x},${y}`);
    }
    
    // Stars
    for (let s = 0; s < 15; s++) {
      let sx = RND(NP * 0.8) + NP * 0.1;
      let sy = RND(NP * 0.8) + NP * 0.1;
      let starSize = 10;
      
      LPRINT(`M${int(sx-starSize)},${int(sy)}`);
      LPRINT(`D${int(sx+starSize)},${int(sy)}`);
      LPRINT(`M${int(sx)},${int(sy-starSize)}`);
      LPRINT(`D${int(sx)},${int(sy+starSize)}`);
    }
  }
  
  TRACE2();
}

function keyPressed() {
  if (key == 'l' || key == 'L') {
    lightsOn = !lightsOn;
    clear();
    background_(BG_COLOR);
    drawPattern();
  }
}
