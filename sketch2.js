

let gridSize = 10; // Number of rows and columns in the grid
let gridSpacing; // Spacing between grid boxes



function setup() {
    let canvas =createCanvas(650, 650);
    canvas.parent('sketch2-container');
    gridSpacing = width / gridSize;
}
function draw() {
    background("#002BFF");
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            push(); // Save the current transformation state
            // Translate to the center of the grid box
            translate(
                col * gridSpacing + gridSpacing / 2,
                row * gridSpacing + gridSpacing / 2
            ); // Calculate the scale factor to fit the shape within the grid box
            let maxDimension = min(gridSpacing * 0.8, gridSpacing * 0.8); // Adjust scaling factor as needed
            let scaleFactor = maxDimension / 800; // Assuming original shape size is 100
            scale(scaleFactor);
            square(row, col, 20); // Call superForm to draw the custom shape
            superForm();
            pop(); // Restore the previous transformation state
        }
    }
}
function superForm() {
    beginShape();
    translate(0, 0); // Center the shape within the grid box
    fill("#FF3864");
    stroke("#002BFF");
    for (let theta = 0; theta < 2 * PI; theta += 0.01) {
        let rad = r(
            theta,
            10, // a
            70, // b
            2, // m
            10, // n1
            3, // n2
            10 // n3
        );
        let a = rad * cos(theta) * 50;
        let b = rad * sin(theta) * 50;
        vertex(a, b);
        vertex(a, b);
    }
    endShape();
}
function r(theta, a, b, m, n1, n2, n3) {
    return pow(
        pow(abs(cos((m * theta) / 4.0) / a), n2) +
            pow(abs(sin((m * theta) / 4.0) / b), n3),
        -1.0 / n1
    );
}

