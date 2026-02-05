// GENUARY 2026 - DAY 11
// Quine (conceptual - draws code as image)

let DESSIN = 11;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  
  // Draw the code as ASCII art-style pattern
  let code = [
    "let DESSIN=11",
    "function setup()",
    "  INIT()",
    "  drawCode()",
    "  TRACE2()",
    "end"
  ];
  
  let startY = 100;
  let lineHeight = 50;
  
  for (let line = 0; line < code.length; line++) {
    let y = startY + line * lineHeight;
    let x = 50;
    
    // Draw each character as a simple glyph
    for (let c = 0; c < code[line].length; c++) {
      let charX = x + c * 15;
      
      // Simple rectangle for each character
      LPRINT(`M${int(charX)},${int(y)}`);
      LPRINT(`D${int(charX+10)},${int(y)}`);
      LPRINT(`D${int(charX+10)},${int(y+15)}`);
      LPRINT(`D${int(charX)},${int(y+15)}`);
      LPRINT(`D${int(charX)},${int(y)}`);
    }
  }
  
  TRACE2();
}
