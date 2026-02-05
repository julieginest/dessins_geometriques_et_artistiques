// GENUARY 2026 - DAY 13
// Self Portrait

let DESSIN = 13;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('RED');
  
  let cx = NP/2, cy = NP/2;
  
  // Face outline (circle)
  let faceR = NP * 0.35;
  for (let i = 0; i <= 60; i++) {
    let angle = (i / 60) * 2 * PI;
    let x = int(cx + faceR * cos(angle));
    let y = int(cy + faceR * sin(angle));
    if (i == 0) LPRINT(`M${x},${y}`);
    else LPRINT(`D${x},${y}`);
  }
  
  // Left eye (triangle)
  let eyeY = cy - faceR * 0.2;
  let eyeSize = 25;
  LPRINT(`M${int(cx - faceR*0.3)},${int(eyeY-eyeSize)}`);
  LPRINT(`D${int(cx - faceR*0.3 + eyeSize)},${int(eyeY)}`);
  LPRINT(`D${int(cx - faceR*0.3 - eyeSize)},${int(eyeY)}`);
  LPRINT(`D${int(cx - faceR*0.3)},${int(eyeY-eyeSize)}`);
  
  // Right eye (square)
  LPRINT(`M${int(cx + faceR*0.3 - eyeSize)},${int(eyeY - eyeSize)}`);
  LPRINT(`D${int(cx + faceR*0.3 + eyeSize)},${int(eyeY - eyeSize)}`);
  LPRINT(`D${int(cx + faceR*0.3 + eyeSize)},${int(eyeY + eyeSize)}`);
  LPRINT(`D${int(cx + faceR*0.3 - eyeSize)},${int(eyeY + eyeSize)}`);
  LPRINT(`D${int(cx + faceR*0.3 - eyeSize)},${int(eyeY - eyeSize)}`);
  
  // Nose (line)
  LPRINT(`M${int(cx)},${int(cy)}`);
  LPRINT(`D${int(cx)},${int(cy + faceR*0.2)}`);
  
  // Mouth (arc)
  for (let i = 0; i <= 20; i++) {
    let angle = PI/4 + (i / 20) * PI/2;
    let mouthR = faceR * 0.25;
    let x = int(cx + mouthR * cos(angle));
    let y = int(cy + faceR*0.15 + mouthR * sin(angle));
    if (i == 0) LPRINT(`M${x},${y}`);
    else LPRINT(`D${x},${y}`);
  }
  
  TRACE2();
}
