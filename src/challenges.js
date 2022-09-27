// Desafio 1
function compareTrue(input1, input2) {
  if (input1 === true && input2 === true) {
    return true
  }
  return false
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// Desafio 3
function splitSentence(param) {
  let array = param.split(' ')
  return array
}
// Desafio 4
let array = ['foguete', 'não', 'tem', 'ré']
function concatName(param) {
  let newArray = param[param.length-1]+ ', ' + param[0]
  return newArray
}



console.log(concatName(array))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
