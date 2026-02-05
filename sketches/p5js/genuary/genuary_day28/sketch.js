// GENUARY 2026 - DAY 28
// No libraries, no canvas, only HTML elements
// This sketch breaks the framework intentionally!

let DESSIN = 28;

function setup() {
  // Override p5.js - use pure HTML/CSS
  noCanvas();
  
  let container = document.body;
  container.innerHTML = '<div id="art-container"></div>';
  
  let artDiv = document.getElementById('art-container');
  artDiv.style.cssText = `
    position: relative;
    width: 480px;
    height: 480px;
    background: #f5f5f5;
    margin: 20px auto;
  `;
  
  // Create geometric shapes using divs
  for (let i = 0; i < 20; i++) {
    let shape = document.createElement('div');
    let size = 20 + Math.random() * 60;
    let x = Math.random() * (480 - size);
    let y = Math.random() * (480 - size);
    let rotation = Math.random() * 360;
    
    shape.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      border: 2px solid #000;
      transform: rotate(${rotation}deg);
      ${Math.random() > 0.5 ? 'border-radius: 50%;' : ''}
    `;
    
    artDiv.appendChild(shape);
  }
  
  // Add title
  let title = document.createElement('div');
  title.textContent = 'DAY 28: Pure HTML';
  title.style.cssText = `
    text-align: center;
    font-family: monospace;
    font-size: 24px;
    margin-top: 20px;
  `;
  container.appendChild(title);
}
