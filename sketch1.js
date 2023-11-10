 
//  sketch 1
 
 
let x, y, z;
let t = 0;

function setup() {
    let canvas = createCanvas(350, 300);
    canvas.parent('sketch1-container');
    frameRate(3000);
    
}
function draw() {
    background("#FF3864");
    stroke("#2167FF");
    fill("#2A00FF");
    translate(width / 2, height / 2);
    beginShape();
    scale(0.05);
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
        vertex(x, y);

       
    }
    endShape();
    t += 0.1;
}
function r(theta, a, b, m, n1, n2, n3) {
    return pow(
        pow(abs(cos((m * theta) / 4.0) / a), n2) +
            pow(abs(sin((m * theta) / 4.0) / b), n3),
        -1.0 / n1
    );
}





// sketch 2 





// let gridSize = 10; // Number of rows and columns in the grid
// let gridSpacing; // Spacing between grid boxes



// var k = function setup() {
//     createCanvas(650, 650);
//     gridSpacing = width / gridSize;
// }
// function draw() {
//     background("#002BFF");
//     for (let row = 0; row < gridSize; row++) {
//         for (let col = 0; col < gridSize; col++) {
//             push(); // Save the current transformation state
//             // Translate to the center of the grid box
//             translate(
//                 col * gridSpacing + gridSpacing / 2,
//                 row * gridSpacing + gridSpacing / 2
//             ); // Calculate the scale factor to fit the shape within the grid box
//             let maxDimension = min(gridSpacing * 0.8, gridSpacing * 0.8); // Adjust scaling factor as needed
//             let scaleFactor = maxDimension / 800; // Assuming original shape size is 100
//             scale(scaleFactor);
//             square(row, col, 20); // Call superForm to draw the custom shape
//             superForm();
//             pop(); // Restore the previous transformation state
//         }
//     }
// }
// function superForm() {
//     beginShape();
//     translate(0, 0); // Center the shape within the grid box
//     fill("#FF3864");
//     stroke("#002BFF");
//     for (let theta = 0; theta < 2 * PI; theta += 0.01) {
//         let rad = r(
//             theta,
//             10, // a
//             70, // b
//             2, // m
//             10, // n1
//             3, // n2
//             10 // n3
//         );
//         let a = rad * cos(theta) * 50;
//         let b = rad * sin(theta) * 50;
//         vertex(a, b);
//         vertex(a, b);
//     }
//     endShape();
// }
// function r(theta, a, b, m, n1, n2, n3) {
//     return pow(
//         pow(abs(cos((m * theta) / 4.0) / a), n2) +
//             pow(abs(sin((m * theta) / 4.0) / b), n3),
//         -1.0 / n1
//     );
// }

// var myp5 = new p5(k, 'c2');
