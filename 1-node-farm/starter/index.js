const fs = require('fs');

// This uses File System module to read from another file
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); 
console.log(textIn)


const textOut = `This is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;
//This writes textOut on the first parameter file
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!')
