const events = require("events");


const emitter = new events.EventEmitter();

emitter.on("costomEvent", (message, user) => {
  console.log(`${user}: ${message}`)
})

emitter.emit("costomEvent", "Hello Word", "Computer");
emitter.emit("costomEvent", "That's pretty cool huh? ", "Alex");