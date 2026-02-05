// GENUARY 2026 - DAY 29
// Genetic evolution and mutation

let DESSIN = 29;
let NP = 480, PI = Math.PI;

function setup() {
  INIT();
  PALETTE('NEW_BLUE');
  
  // Genetic algorithm: evolve polygon shapes
  let generations = 5;
  let populationSize = 4;
  
  // Initial DNA: array of angles for polygon
  let population = [];
  for (let i = 0; i < populationSize; i++) {
    let dna = [];
    for (let j = 0; j < 8; j++) {
      dna.push(RND(2 * PI));
    }
    population.push(dna);
  }
  
  // Draw evolution across canvas
  let gridX = 2;
  let gridY = generations;
  let cellW = NP / gridX;
  let cellH = NP / gridY;
  
  for (let gen = 0; gen < generations; gen++) {
    // Mutate
    let newPop = [];
    for (let i = 0; i < populationSize; i++) {
      let newDNA = [];
      for (let j = 0; j < population[i].length; j++) {
        let gene = population[i][j];
        // Mutation
        if (RND(1) > 0.7) {
          gene += (RND(1) - 0.5) * PI/4;
        }
        newDNA.push(gene);
      }
      newPop.push(newDNA);
    }
    population = newPop;
    
    // Draw this generation
    for (let i = 0; i < Math.min(gridX, population.length); i++) {
      let cx = i * cellW + cellW/2;
      let cy = gen * cellH + cellH/2;
      let r = cellW * 0.3;
      
      let dna = population[i];
      dna.sort((a, b) => a - b);
      
      for (let j = 0; j <= dna.length; j++) {
        let angle = dna[j % dna.length];
        let x = int(cx + r * cos(angle));
        let y = int(cy + r * sin(angle));
        
        if (j == 0) LPRINT(`M${x},${y}`);
        else LPRINT(`D${x},${y}`);
      }
    }
  }
  
  TRACE2();
}
