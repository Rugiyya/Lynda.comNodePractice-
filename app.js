// const counter = require("./myModule");



// counter.inc();
// counter.inc();
// counter.inc();

//or 
const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount());