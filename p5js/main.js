

    sketch.setup = function() {
        sketch.createCanvas(350, 300);
        // canvas.parent('sketch1-container');
        sketch.frameRate(3000);
  
    sketch.draw = function() {
        sketch.background("#FF3864");
        sketch.stroke("#2167FF");
        sketch.fill("#2A00FF");
        sketch.translate(width / 2, height / 2);
        sketch.beginShape();
        sketch.scale(0.05);
        for (let theta = 0; theta <= 2 * PI; theta += 0.0001) {
            let rad = r(
                theta,
                sin(t) + 700, //a
                2, //b
                8, //m // rotational sym
                4, //n1
                1, //n2
                cos(t) + 0.5 //n3
            );
            let x = rad * cos(theta) * 500;
            let y = rad * sin(theta) * 500;
            sketch.vertex(x, y);
    
           
        }
        sketch.endShape();
        t += 0.1;
    }
}

  let sketch1 = new p5(s1,'ss1');
  let sketch2 = new p5(s1,'ss2');
  let sketch3 = new p5(s2,'ss3');
  let sketch4 = new p5(s2,'ss4');

//   function Box(_x1, _y1, _x2, _y2, _r) {
//     this.x1 = _x1 != null ? _x1 : _r.width / 2;
//     this.y1 = _y1 != null ? _y1 : _r.height / 2;
//     this.x2 = _x2 || 32;
//     this.y2 = _y2 || 32;
//     this.adj = _r.floor(_r.random(64));
//   }
  
//   Box.prototype.Update = function() {
//     this.adj++;
//     if (this.adj >= 32) this.adj -= 64;
//   }
  
//   Box.prototype.Render = function(_r) {
//     _r.fill(0);
//     _r.stroke(128);
//     _r.ellipseMode(_r.CENTER);
//     _r.ellipse(this.x1 + Math.abs(this.adj) - 16, this.y1, this.x2, this.y2);
//   }
  
  
//   const s1 = sketch => {
//     let boxList = [];
                        
//     sketch.setup = function() {
//       sketch.createCanvas(640, 160);
//       sketch.frameRate(16+sketch.floor(sketch.random(32)));
//       for (let x of [32, sketch.width - 32]) {
//         for (let y of [32, sketch.height - 32]) {
//           boxList.push(new Box(x, y, 32, 32, sketch));
//         }
//       }
//     }
  
//     sketch.draw = function() {
//       for (let box of boxList) {
//         box.Update();
//       }
//       sketch.push();
//       sketch.background(220);
//       for (let box of boxList) {
//         box.Render(sketch);
//       }
//       sketch.pop();
//     }
//   }
  
//   const s2 = sketch => {
//     let counter = -1;
//     sketch.setup = function() {
//       sketch.createCanvas(640,128);
//       sketch.frameRate(16+sketch.floor(sketch.random(32)));
//     }
//     sketch.draw = function() {
//       counter = (counter+1)%256;
//       sketch.background(counter);
//     }
//   }
  
//   let sketch1 = new p5(s1,'ss1');
//   let sketch2 = new p5(s1,'ss2');
//   let sketch3 = new p5(s2,'ss3');
//   let sketch4 = new p5(s2,'ss4');