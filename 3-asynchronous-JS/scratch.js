
const getNames = () => {
  return new Promise((resolve, reject) => {
    resolve(['fer', 'karl', 'andres', 'patric']);
  });
}


const callNames = async () => {
  const namesArray = await getNames()
  namesArray.push('newname')
  console.log(namesArray)
}

getNames().then(data => {
  console.log(data)
})

callNames()


// EXERCISE
// In this challenge you will receive an array of unresolved promises which each resolve to a number.

// Write a function called promiseResolver which takes the array of unresolved promises as an argument, and returns a promise which resolves to an array containing the resolved values of the original array of unresolved promises(maintaining the order).

// Example pseudo code:

// // example array of unresolved promises which will be passed in as an argument
// [ Promise { resolve(3) },
//   Promise { resolve(6) },
//   Promise { resolve(9) } ]