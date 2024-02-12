const fs = require("fs");
const { Transform } = require("stream");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperCaseText = chunk.toString().toUpperCase();
    this.push(upperCaseText);
    callback();
  },
});
const locPath = "./src/";

const inputFilePath = locPath + "input.txt";
const outputFilePath = locPath + "output.txt";

const readStream = fs.createReadStream(inputFilePath);

const writeStream = fs.createWriteStream(outputFilePath);

readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on("finish", () => {
  console.log("sucsessfuly whrite result: output.txt.");
});

readStream.on("error", handleError);
writeStream.on("error", handleError);

function handleError(err) {
  console.error("error", err.message);
}
