const fs = require("fs");
// instead of using tostring, use encoding for buffer
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog4.txt");

//on is a event listener(every time we receive buffer of data)
readStream.on("data", (chunk) => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write("\nNEW CHUNK:\n");
  writeStream.write(chunk);
});

// piping
// readStream.pipe(writeStream);
