// GENUARY 2026 - DAY 5
// Write "Genuary" - custom vector font

let DESSIN = 5;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('NEW_YELLOW');
  
  let startX = 40;
  let startY = NP/2;
  let letterWidth = 50;
  let letterHeight = 80;
  
  // G
  drawG(startX, startY, letterWidth, letterHeight);
  // E
  drawE(startX + letterWidth * 1.2, startY, letterWidth, letterHeight);
  // N
  drawN(startX + letterWidth * 2.4, startY, letterWidth, letterHeight);
  // U
  drawU(startX + letterWidth * 3.6, startY, letterWidth, letterHeight);
  // A
  drawA(startX + letterWidth * 4.8, startY, letterWidth, letterHeight);
  // R
  drawR(startX + letterWidth * 6.0, startY, letterWidth, letterHeight);
  // Y
  drawY(startX + letterWidth * 7.2, startY, letterWidth, letterHeight);
  
  TRACE2();
}

function drawG(x, y, w, h) {
  LPRINT(`M${int(x+w)},${int(y-h/2)}`);
  LPRINT(`D${int(x)},${int(y-h/2)}`);
  LPRINT(`D${int(x)},${int(y+h/2)}`);
  LPRINT(`D${int(x+w)},${int(y+h/2)}`);
  LPRINT(`D${int(x+w)},${int(y)}`);
  LPRINT(`D${int(x+w/2)},${int(y)}`);
}

function drawE(x, y, w, h) {
  LPRINT(`M${int(x+w)},${int(y-h/2)}`);
  LPRINT(`D${int(x)},${int(y-h/2)}`);
  LPRINT(`D${int(x)},${int(y+h/2)}`);
  LPRINT(`D${int(x+w)},${int(y+h/2)}`);
  LPRINT(`M${int(x)},${int(y)}`);
  LPRINT(`D${int(x+w*0.8)},${int(y)}`);
}

function drawN(x, y, w, h) {
  LPRINT(`M${int(x)},${int(y+h/2)}`);
  LPRINT(`D${int(x)},${int(y-h/2)}`);
  LPRINT(`D${int(x+w)},${int(y+h/2)}`);
  LPRINT(`D${int(x+w)},${int(y-h/2)}`);
}

function drawU(x, y, w, h) {
  LPRINT(`M${int(x)},${int(y-h/2)}`);
  LPRINT(`D${int(x)},${int(y+h/2)}`);
  LPRINT(`D${int(x+w)},${int(y+h/2)}`);
  LPRINT(`D${int(x+w)},${int(y-h/2)}`);
}

function drawA(x, y, w, h) {
  LPRINT(`M${int(x)},${int(y+h/2)}`);
  LPRINT(`D${int(x+w/2)},${int(y-h/2)}`);
  LPRINT(`D${int(x+w)},${int(y+h/2)}`);
  LPRINT(`M${int(x+w*0.25)},${int(y+h/4)}`);
  LPRINT(`D${int(x+w*0.75)},${int(y+h/4)}`);
}

function drawR(x, y, w, h) {
  LPRINT(`M${int(x)},${int(y+h/2)}`);
  LPRINT(`D${int(x)},${int(y-h/2)}`);
  LPRINT(`D${int(x+w)},${int(y-h/2)}`);
  LPRINT(`D${int(x+w)},${int(y)}`);
  LPRINT(`D${int(x)},${int(y)}`);
  LPRINT(`M${int(x+w*0.5)},${int(y)}`);
  LPRINT(`D${int(x+w)},${int(y+h/2)}`);
}

function drawY(x, y, w, h) {
  LPRINT(`M${int(x)},${int(y-h/2)}`);
  LPRINT(`D${int(x+w/2)},${int(y)}`);
  LPRINT(`D${int(x+w)},${int(y-h/2)}`);
  LPRINT(`M${int(x+w/2)},${int(y)}`);
  LPRINT(`D${int(x+w/2)},${int(y+h/2)}`);
}
