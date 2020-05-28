const fs = require('fs');

// Blocking, synchronous way
// This uses File System module to read from another file
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); 
// console.log(textIn)


// const textOut = `This is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;
// // This writes textOut on the first parameter file
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!')


// Non-blocking asynchronous way
// OBS: Next code will print to the console 'Will read file!' first and then the data of start.txt after it finish execution 
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
  console.log(data);
});
console.log('Will read file!');
