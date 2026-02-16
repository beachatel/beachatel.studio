let gridSize = 100;
let anim = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  strokeWeight(1.5);

  let random1 = 100 * noise(0.005 * frameCount);
  translate(windowWidth / 2, height / 2);

  for (let x = random1; x < width; x += gridSize) {
    for (let y = random1 / 2; y < height; y += gridSize) {
      beginShape(POINTS);
      vertex(x * random1, y * 2);
      vertex(x / y, y);
      vertex(y, x * 2);
      vertex(x, y);
      rotate(random1 * 0.004);
      rect(x, y, 20, 20);
      endShape();
    }
  }

  anim += 0.1;
}
