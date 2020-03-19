//The fs module can be used to list files in directories, create new files in directories, stream files, watch files, modify file permissions

const fs = require("fs");

//const files = fs.readdirSync("./assets") sync 

fs.readdir("./assets", (err, files) => { //async
  if (err) {
    throw err;
  }
  console.log("complete");
  console.log(files);
});
console.log("started reading files")