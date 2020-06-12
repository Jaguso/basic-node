const fs = require('fs');

setTimeout(() => console.log('Timer 1 finishes'), 0);
setImmediate(() => console.log('Immediate 1 finished'))


fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
});

console.log('Hello from the top-level code');