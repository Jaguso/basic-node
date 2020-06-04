const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate');

////////////////////////////
// FILES

// // Blocking, synchronous way
// // This uses File System module to read from another file
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); 
// console.log(textIn)


// const textOut = `This is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;
// // This writes textOut on the first parameter file
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!')


// // Non-blocking asynchronous way
// // OBS: Next code will print to the console 'Will read file!' first and then the data of start.txt after it finish execution 
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// console.log('Will read file!');

// // Next code will get text from multiple files and write it into another file 
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR!');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written!');
//       });
//     })
//   });
// });
// console.log('Will read file!');



//////////////////////////////////////
// SERVER



// Usamos sync funtions para leer los archivos una sola vez
const tempOverview =  fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8' );
const tempCard =  fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8' );
const tempProduct =  fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8' );

const data =  fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8' );
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, { lower: true }));

console.log(slugs)


const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true)

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml)

    res.end(output);

  // Product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

  // API
  } else if (pathname === '/api') {
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      res.writeHead(200, { 'Content-type': 'application/json' }); // se tiene que poner el tipo de dato que se envía en el header
      res.end(data);
    });

  // Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, 'localhost', () => {
  console.log('Listening to requests on port 8000');
});