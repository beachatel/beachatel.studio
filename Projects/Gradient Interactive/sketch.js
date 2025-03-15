let gridSize = 50;
let colorPicker = 50;
let colors;
let value = 0.25;
let interA;
let x1 = 10;
  let v1,v2,v3,v4;
  let from,to;
  let noiseFrom,noiseTo;
  let r1,r2,r3,r4; 
  let r;

let tanCheckBox,sinCheckBox,check1,check2,check3,check4;
let translateSlider,gridSizeSlider,gridSizeMultSlider;  
let tanEllipseAnimation,sinEllipseAnimation;
let bgColorPicker;
let saveImageButton;

function setup() {
  createCanvas(windowWidth / 1.25 , windowHeight);

//  frameRate(1);
  translateSlider = createSlider(1,20,10,0.01);
    translateSlider.position(10, 10);
  translateSlider.size(80);

  gridSizeSlider = createSlider(10,100,50,1);
    gridSizeSlider.position(10, 40);
  gridSizeSlider.size(80);

   gridSizeMultSlider = createSlider(1,4,1,1);
    gridSizeMultSlider.position(10, 70);
  gridSizeMultSlider.size(80);

  tanCheckBox = createCheckbox("Tan", false);
   tanCheckBox.position( 10, 100)
    .style("color", "white");

  tanEllipseAnimation = createCheckbox("Tan Ellipse Animation", false);
   tanEllipseAnimation.position( 70, 100)
    .style("color", "white");

  sinCheckBox = createCheckbox("Sin", false);
   sinCheckBox.position( 10, 120)
    .style("color", "white");

    sinEllipseAnimation = createCheckbox("Sin Ellipse Animation", false);
   sinEllipseAnimation.position( 70, 120)
    .style("color", "white");
 r = random(1);

  check1 = createCheckbox("check 1", false);
   check1.position( 10, 140)
    .style("color", "white");
 r = random(1);

  check2 = createCheckbox("check 2", false);
   check2.position( 10, 160)
    .style("color", "white");
 r = random(1);

  check3 = createCheckbox("check 3", false);
   check3.position( 10, 180)
    .style("color", "white");
 r = random(1);

  check4 = createCheckbox("check 4", false);
   check4.position( 10, 200)
    .style("color", "white");

 bgColorPicker = createColorPicker("#000000");
  bgColorPicker.position(10, 240);
  createDiv("Background Color")
    .position(10, 280)
    .style("color", "white");

  // color pallete picker


  createDiv("Colour Pallette")
    .position(10, 350)
    .style("color", "black")
    .style("padding-bottom","100px")
    .style("padding-right","150px")
    .style("background-color","white")
    

    saveImageButton = createButton('Save Image');
  saveImageButton.mousePressed(saveImage);
  saveImageButton.position(10, 700);
  saveImageButton.style("background-color", "white");



  r = random(1);
}


function draw() {
  colors = [color('#e53723'), color('#3d85d8'), color('#e66e95'), color('#3c8253'), color('#e58136')];

      let s1 = translateSlider.value();
      let gridSize = gridSizeSlider.value();
      let s2 = gridSizeMultSlider.value();
 
  let baseNoise = frameCount * 0.002;
  r1 = map(noise(baseNoise), 0, 1, 0.5, 1.2);

  let nOffset = 0.1;

  // Declare interpolation variables here
  let interA, interB, interC, interD;

  // Set up noise-based from/to colors; the last iteration will set final values
  let nVal = baseNoise;
  let fromIndex = floor(noise(nVal) * colors.length);
  let toIndex = floor(noise(nVal + 10) * colors.length);
  let from = colors[fromIndex];
  let to = colors[toIndex];

  //tan animation var
  let e1 = 1;
    e1 -= 0.5;

//sin animation var
    let e2 = 1;
    e2 -= v2 * 2;

    v1 = abs(sin(frameCount * 0.01));
    v2 = abs(sin(frameCount * 0.02));
    v3 = abs(sin(frameCount * 0.03));
    v4 = abs(sin(frameCount * 0.04));
    v5 = abs(sin(frameCount * 0.05));

    interA = lerpColor(from, to, v1); 
    interB = lerpColor(from, to, v2);
    interC = lerpColor(from, to, v4);
    interD = lerpColor(from, to, v5);

  noStroke();
  // background("#140208");
    background(bgColorPicker.color());
  rectMode(CENTER);
  ellipseMode(CENTER);


  for (let x =  0; x < width; x += gridSize * s2) {
    for (let y = 0; y < height; y += gridSize * s2) {
     
      push();

      translate(x / s1,y / s1);
     
      stroke(interC)
      strokeWeight(r1 * gridSize / 4)
      fill(interD);
      
      rect(x / sin(2), y / sin(2), gridSize * r1 / 1.3, gridSize * r1 / 1.3);
    noStroke();
      fill(interB);




   if (tanCheckBox.checked()) {
         ellipse(x * tan (1), y * tan(1), gridSize * tan(1), gridSize * tan(1));
   }

if (sinCheckBox.checked()) {
         ellipse(x , y , gridSize * sin(1), gridSize * sin(1));
   }


   // animate circles checkbox


    if (tanEllipseAnimation.checked()) {     
   ellipse(x, y, gridSize * tan(1) * e1, gridSize * tan(1) * e1);
   }

   if (sinEllipseAnimation.checked()) {
         ellipse(x, y, gridSize * sin(1) * e2, gridSize * sin(1) * e2);
   }
      //  ellipse(x * sin (2), y * sin(2), gridSize, gridSize);

          // ellipse(x * tan(1), y * tan(1), gridSize, gridSize);
       

      //  boolean checkbox to include this

    //   if (r < 0.25 && x < width / 2){
    //        ellipse(x * sin (2), y / sin(2), gridSize, gridSize);
    //   } else if (r < 0.5 && x > width / 2 ){
    //            ellipse(x / sin (2), y * sin(2), gridSize, gridSize);
    //   } else if (r < 0.75 && y < height / 2){
    //     ellipse(x / sin (2) , y * sin(2),gridSize,gridSize);
    //     } else if (r < 1 && y > height / 2) {
    //  ellipse(x / sin (2) , y * sin(2),gridSize,gridSize);
        
    //     }


        // check boxes 

           if (check1.checked() && width < 2){
           ellipse(x * sin(2), y / sin(2), gridSize, gridSize);
      } else if (check2.checked()){
               ellipse(x / sin (2), y * sin(2), gridSize, gridSize);
      } else if (check3.checked()){
        ellipse(x / sin (2) , y * sin(2),gridSize,gridSize);
        } else if (check4.checked()) {
     ellipse(x / sin (2) , y * sin(2),gridSize,gridSize);
        
        }
 

      fill(interC);
       ellipse(x * sin (2), y * sin(2), gridSize / 2.5, gridSize / 2.5);
     
      stroke(interD);
      strokeWeight(2);
      //  line(x,y * 2,x,y,x,y);
      //  line(x,y,x * 2,y,x,y);
    

      pop();
    
    }
  }
}


function saveImage(){
  save("image.png");
}

// function lerp(colors,value){

//  return [
//         lerp(colors[0][0] + (colors[1][0] - colors[0][0]) * value
//         ,
//         colors[0][1] + (colors[1][1] - colors[0][1]) * value)
//         // colors[0][2] + (colors[1][2] - colors[0][2]) * value
//     ];

// }
