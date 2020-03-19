const fs = require("fs");

if (fs.existsSync("storege-files")) {
  console.log("Alredy there")
} else {
  fs.mkdir("storege-files", err => { //mkdir creates directories(folders)
    if (err) {
      throw err;
    }
    console.log("Directory created")
  });
}

