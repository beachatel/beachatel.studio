let gridSize = 200;
let i = 1;
let gridImages = []; // ← store images per grid cell
let cols, rows;



function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = Math.floor((width - 100) / (gridSize * 0.6));
  rows = Math.floor((height) / (gridSize * 1.1));

  // Initialize gridImages with random loaded images
  let totalCells = cols * rows;
  for (let i = 0; i < totalCells; i++) {
    let url = random(imageUrls);
    loadImage(url, img => {
      gridImages[i] = img;
    });
  }
}


function draw() {
  background(255);
  textSize(20);
  stroke(0);


  let totalGridWidth = cols * gridSize * 0.6;
  let totalGridHeight = rows * gridSize * 1.1;
  let startX = (width - totalGridWidth) / 2;
  let startY = (height - totalGridHeight) / 2;

  let i = 0; // gridImages index
  for (let y = startY; y < startY + totalGridHeight; y += gridSize * 1.1) {
    for (let x = startX; x < startX + totalGridWidth; x += gridSize * 0.6) {
      rect(x, y, 100, 200);
      text(`#${i + 1}`, x, y - 5);

      if (gridImages[i]) {
        image(gridImages[i], x, y, 100, 200); // Fit image to box
      }

      i++;
    }
  }
}

