// this modules you dont have to install with npm there're the modules that are installed localy with your installation of node.js
const path = require("path");// shows path of the files 
const util = require("util"); // is like a console.log but you have to require it and it shows time when it log sth
const v8 = require("v8");// shows memeory usege and memory statistics 

// const dirUploads = path.join(__dirname, "www", "files", "uploads");
// console.log(dirUploads); 
// it logs this C:\Users\rugiy\OneDrive\desktop\Lynda.comNodePractice-\www\files\uploads

// util.log(path.basename(__filename));
// util.log("^ The name of the current file");

util.log(v8.getHeapStatistics());