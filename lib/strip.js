function Strip(pixelCount) {
	let obj = {
		"buffer": new Uint8ClampedArray(pixelCount*3),
		"pixelCount": pixelCount,
		
		// Color may be an array of [R, G, B] or it may be a string
		"setPixelColor": function(index, color) {
			let colorArray;
			colorArray = color;

			// this.buffer.writeUInt8(colorArray[0], index * 3);
			// this.buffer.writeUInt8(colorArray[1], index * 3 + 1);
			// this.buffer.writeUInt8(colorArray[2], index * 3 + 2);

      this.buffer[index * 3] = colorArray[0];
      this.buffer[index * 3 + 1] = colorArray[1];
      this.buffer[index * 3 + 2] = colorArray[2];
		},
		"getPixelColor": function(index) {
			return [
				this.buffer[index * 3],
				this.buffer[index * 3 + 1],
				this.buffer[index * 3 + 2]
			];
		},
		"off": function() {
			let color = [0, 0, 0];
			for (let i=0; i<this.pixelCount; i++) {
				this.setPixelColor(i, color);
			}
		},
		"on": function(color) {
			for (let i=0; i<this.pixelCount; i++) {
				this.setPixelColor(i, color);
			}
		}
	};
	// Initialize the buffer to zeros
	for (let i=0; i<pixelCount*3; i++) {
		obj.buffer[i] = 0;
	}
	return obj;
} // End of Strip()

exports.Strip = Strip;
