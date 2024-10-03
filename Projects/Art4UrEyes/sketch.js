let squares = [];
let newGrid = [];

let sz = 120; //40 - 500 slider
let szIncrement = 1;  // Ensure this is non-zero to see the animation
let growing = true;
let t = 0;

let lastUpdateTime;
let updateInterval = 10000;

let display;

let slider;
let myPicker;

let sizeSlider;
let speedSlider;
let primaryColorPicker;
let secondaryColorPicker;

function setup() {
  createCanvas(windowWidth - windowWidth/8, windowHeight - windowHeight/8, P2D);
  smooth(2);  // Enable anti-aliasing for smoother images
  frameRate(60);

    
  slider = createSlider(0, 200, 0 , 10 );
  slider.position(1900, 100);
  slider.size(200);

  slider = createSlider(0, 200, 0 , 10 );
  slider.position(1900, 200);
  slider.size(200);

  sizeSlider = select('#size-slider');
  speedSlider = select('#speed-slider');
  primaryColorPicker = select('#primary-color');
  secondaryColorPicker = select('#secondary-color');


  myPicker = createColorPicker('rgb(231, 50, 101)');
  myPicker.position(1900, 300);

    myPicker = createColorPicker('rgb(115, 247, 75)');
  myPicker.position(1900, 400);

  // Initialize DisplayGrid
  display = new DisplayGrid();

  // Populate the initial squares grid
  populateGrid();
  lastUpdateTime = millis();  // Initialize the last update time
}

function draw() {
  


    let c = myPicker.color();
    background(c);
   let animationSpeed = slider.value();

   let currentTime = millis();
  if (currentTime - lastUpdateTime >= updateInterval / animationSpeed) {
    lastUpdateTime = currentTime;



    if (growing) {
      sz += szIncrement;
      if (sz >= 100) {  // Max size before shrinking
        growing = false;
      }
    } else {
      sz -= szIncrement;
      if (sz <= 100) {  // Min size before growing
        growing = true;
      }
    }

    populateGrid();
  }

  display.grid();
}

function populateGrid() {
  squares = [];
  newGrid = [];

  for (let x = 0; x < width; x += sz) {
    for (let y = 0; y < height; y += sz) {
      squares.push(new GridSquare(x, y, sz, sz));
    }
  }

  for (let i = 0; i < squares.length; i++) {
    let sqr = squares[i];
    sqr.subDiv(sqr);
  }

  function windowResized() { 
    if(windowWidth < 550) {
        size = 10;
    } else {
        size = 100;
    }

}
}
