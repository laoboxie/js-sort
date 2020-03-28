function generateArr(len, min, max){
  let arr = []
  for(let i=0; i<len; i++){
    let cur = getRandomArbitrary(min, max)
    arr.push(cur)
  }
  return arr
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min; 
}

module.exports = {
  generateArr
}