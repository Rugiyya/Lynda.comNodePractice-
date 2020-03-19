const fs = require("fs");

const colorData = require("./assets/colors.json")

colorData.colorList.forEach(c => {
  fs.appendFile("./storege-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
    if (err) {
      throw err;
    }
  });
});