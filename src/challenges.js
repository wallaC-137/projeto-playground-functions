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
  let newArray = param[param.length - 1] + ', ' + param[0]
  return newArray
}
// Desafio 5

function footballPoints(wins, ties) {
  return (wins * 3) + ties
}
// Desafio 6
function highestCount(param) {
  let highted = 0;
  let count = 0;
  for (let index = 0; index < param.length; index += 1) {
    if (highted === param[index]) {
      count += 1
    } else if (highted < param[index]) {
      highted = param[index]
      count = 1
    }
  }
  return count;
}

// Desafio 7

function catAndMouse(param1, param2, param3) {
  let cat1 = param2 - param1;
  let cat2 = param3 - param1;
  
  if (cat1 < cat2) {
    return 'cat1';
  } else if(cat2 < cat1){
    return 'cat2';
  }	else if (cat1 === cat2){
    return 'os gatos trombam e o rato foge'
  }
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
