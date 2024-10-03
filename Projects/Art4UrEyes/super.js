class SuperForm {
  constructor(xTemp, yTemp, wTemp, hTemp) {
    this.x = xTemp;
    this.y = yTemp;
    this.w = wTemp;
    this.h = hTemp;
    this.t = 0;
  }

  display() {
    beginShape();

    for (let theta = 0; theta <= TWO_PI; theta += 0.9) {
      let radius = this.r(theta, sin(this.t) + 700, 2, 8, 4, 1, cos(this.t) + 0.5);
      
      // Map radius to fit within the grid square
      let maxRadius = max(this.w, this.h) / 3; // Max radius to fit within the smallest dimension
      let adjustedRadius = radius * maxRadius;
      
      // Calculate the x and y positions relative to the center of the grid square
      let posX = this.x + this.w / 2 + adjustedRadius * cos(theta * 100);
      let posY = this.y + this.h / 2 + adjustedRadius * sin(theta * 10);
      
      // Draw the vertex for the shape
      vertex(posX, posY);
    }
    
    endShape(CLOSE);
    this.t += 0.1; // Increment time
  }

  r(theta, a, b, m, n1, n2, n3) {
    let cosPart = pow(abs(cos((m * theta) / 4.0) / a), n2);
    let sinPart = pow(abs(sin((m * theta) / 4.0) / b), n3);
    
    return pow(cosPart + sinPart, -1.0 / n1);
  }
}
