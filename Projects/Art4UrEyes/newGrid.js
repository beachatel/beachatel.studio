class DisplayGrid {
  constructor() {
    // Constructor can remain empty or be omitted if no initialization is needed
  }

  grid() {
    // Display squares from the newGrid array
    for (let i = 0; i < newGrid.length; i++) {
      let s = newGrid[i];
      s.display();
    }
  }
}
