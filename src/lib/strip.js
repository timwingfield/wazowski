class Strip {
  constructor(pixelCount) {
    this.pixelCount = pixelCount
    this.buffer = new Uint8ClampedArray(pixelCount*3)

	  // Initialize the buffer to zeros
    for (let i=0; i<pixelCount*3; i++) {
      this.buffer[i] = 0;
    }
  }

  setPixelColor(index, color) {
    let colorArray;
    colorArray = color;

    this.buffer[index * 3] = colorArray[0];
    this.buffer[index * 3 + 1] = colorArray[1];
    this.buffer[index * 3 + 2] = colorArray[2];
  }

  getPixelColor(index) {
    return [
      this.buffer[index * 3],
      this.buffer[index * 3 + 1],
      this.buffer[index * 3 + 2]
    ];
  }

  off() {
    let color = [0, 0, 0];
    for (let i=0; i<this.pixelCount; i++) {
      this.setPixelColor(i, color);
    }
  }

  on(color) {
    for (let i=0; i<this.pixelCount; i++) {
      this.setPixelColor(i, color);
    }
  }
}

export default Strip
