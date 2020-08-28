const fs = require('fs');
const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, err => {
//         if (err) return console.log(err.message);
//         console.log('Random dog image sent to file');
//       })
//     });
// });


// The same as before, but now using promises

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res => {
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, err => {
//         if (err) return console.log(err.message);
//         console.log('Random dog image sent to file');
//       })
//     })
//     .catch(err => {
//       console.log(err.message);
//     })
// });


const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file')
      resolve(data);
    })
  })
}

readFilePro(`${__dirname}/dog.txt`).then(data => {
  console.log(data.toString())
})
