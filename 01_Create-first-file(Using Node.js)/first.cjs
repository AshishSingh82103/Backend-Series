const fs = require("fs");
fs.writeFile('output.txt', "writing file", (err) => {
  if(err) {
    console.log("Error in writing file");
   } else {
    console.log("File written successfully");
  }
});       





