// 4k
var width = 3840;
var height = 2160;

// Create a canvas
const { createCanvas } = require("canvas");
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Create context
var gl = require("gl")(width, height, { preserveDrawingBuffer: true });

// Clear screen to red
gl.clearColor(1, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);

// Write output as a PPM formatted image
var pixels = new Uint8Array(width * height * 4);
gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
process.stdout.write(
  ["P3\n# gl.ppm\n", width, " ", height, "\n255\n"].join("")
);

const imageData = ctx.createImageData(width, height);
imageData.data.set(pixels);
ctx.putImageData(imageData, 0, 0);

ctx.font = "30px Impact";
ctx.fillText(`This image is ${width}x${height}`, 100, 100);

// Non-standard
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "output_file.png");
const fileOut = fs.createWriteStream(filePath);
const stream = canvas.createPNGStream();
stream.pipe(fileOut);
fileOut.on("finish", () =>
  console.log(`PNG file created at ${path.join(__dirname, "output_file.png")}`)
);
