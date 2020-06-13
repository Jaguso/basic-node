const EventEmitter = require('events');
const http = require('http');

// Two ways of doing the same:
// 1
// const myEmitter = new EventEmitter();

// 2
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();
////////


myEmitter.on('newSale', () => {
  console.log('There was a new sale!');
});

myEmitter.on('newSale', () => {
  console.log('Customer name: Jonas');
});

myEmitter.on('newSale', stock => {
  console.log(`There are now ${stock} items left in stock`)
})

myEmitter.emit('newSale', 9);


///////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received')
  console.log(req.url) // this shows the url of the request
  res.end('Request received')
});

server.on('request', (req, res) => {
  console.log('Another request :)')
});

server.on('close', () => {
  console.log('Server closed')
})

server.listen(8000, 'localhost', () => {
  console.log('Waiting for requests...')
})