const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please turn off');
  setTimeout(()=>{
    console.log('please turn off the motor!It is gentle reminder');
  },3000);
});

console.log("the script is running")
myEmitter.emit('waterfull');