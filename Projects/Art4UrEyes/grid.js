class GridSquare {
  constructor(xTemp, yTemp, wTemp, hTemp) {
    this.x = xTemp;
    this.y = yTemp;
    this.w = wTemp;
    this.h = hTemp;
    this.subSquares = [];
    this.superForm = new SuperForm(this.x, this.y, this.w, this.h);  // Initialize SuperForm with the grid square's position and size
  }

  display() {
    // Draw the grid square outline
    stroke(0, 255, 0);

    // Uncomment the following lines if you want to display the grid square outline
    // noFill();   // No fill for the rectangle
    // rect(this.x, this.y, this.w, this.h);  // Draw the rectangle outline
  
    // Display the Superformula within this grid square
    this.superForm.display();

    // Draw second-level subdivisions
    for (let sub of this.subSquares) {
      fill(0, 255, 0);
      rect(sub.x, sub.y, sub.w, sub.h);
      fill(0, 0, 255);
      sub.superForm.display();
    }
  }

  subDiv(sqr) {
    // First level of subdivision
    if (random(1) > 0.5) {
      let sz = sqr.w / 2;
      let s1 = new GridSquare(this.x, this.y, sz, sz);
      let s2 = new GridSquare(this.x + sz, this.y, sz, sz);
      let s3 = new GridSquare(this.x, this.y + sz, sz, sz);
      let s4 = new GridSquare(this.x + sz, this.y + sz, sz, sz);

      // Add first level subdivisions to the subSquares array
      this.subSquares.push(s1);
      this.subSquares.push(s2);
      this.subSquares.push(s3);
      this.subSquares.push(s4);

      // Second level of subdivision
      if (random(1) > 0.5) {
        for (let subSquare of this.subSquares) {
          let subSz = subSquare.w / 2;
          subSquare.subSquares.push(new GridSquare(subSquare.x, subSquare.y, subSz, subSz));
          subSquare.subSquares.push(new GridSquare(subSquare.x + subSz, subSquare.y, subSz, subSz));
          subSquare.subSquares.push(new GridSquare(subSquare.x, subSquare.y + subSz, subSz, subSz));
          subSquare.subSquares.push(new GridSquare(subSquare.x + subSz, subSquare.y + subSz, subSz, subSz));
        }
      }
    } else {
      this.subSquares.push(sqr);
    }

    // Add all the subdivisions to the newGrid array
    for (let s of this.subSquares) {
      newGrid.push(s);
    }
  }
}
