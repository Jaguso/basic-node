
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