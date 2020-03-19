const fs = require("fs");

// const text = fs.readFileSync("Readme.md", "UTF-8"); sync
// fs.readFile("Readme.md", "UTF-8", (err, text) => {
// if (err) {
//   console.log(`An error has occured:${err.message}`);
//   process.exit();
// }
//   console.log("file contents read");
//   console.log(text);
// });

fs.readFile("./assets/loginPage.jpg", (err, img) => {
  if (err) {
    console.log(`An error has occured:${err.message}`);
    process.exit();
  }
  console.log("file contents read");
  console.log(img);
});
