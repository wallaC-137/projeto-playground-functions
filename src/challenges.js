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
  let highted = param[0];
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
  let cat1 = Math.abs(param2 - param1);
  let cat2 = Math.abs(param3 - param1);

  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat2 < cat1) {
    return 'cat2';
  } else if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge'
  }
  return cat2
}

// Desafio 8
function fizzBuzz(param) {
  let newArray = [];

  for (let index = 0; index < param.length; index += 1) {
    if (param[index] % 3 === 0 && param[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (param[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (param[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9

function encode(param) {
  let newPhrase = '';

  for (let index of param) {
    if (index === 'a') {
      newPhrase += 1
    } else if (index === 'e') {
      newPhrase += 2
    } else if (index === 'i') {
      newPhrase += 3
    } else if (index === 'o') {
      newPhrase += 4
    } else if (index === 'u') {
      newPhrase += 5
    } else {
      newPhrase += index
    }
  }
  return newPhrase
}

function decode(param) {
  let newPhrase = '';

  for (let index of param) {
    if (index === '1') {
      newPhrase += 'a'
    } else if (index === '2') {
      newPhrase += 'e'
    } else if (index === '3') {
      newPhrase += 'i'
    } else if (index === '4') {
      newPhrase += 'o'
    } else if (index === '5') {
      newPhrase += 'u'
    } else {
      newPhrase += index
    }
  }
  return newPhrase
}

// Desafio 10

function techList(tecnologias, nome) {
  let obj = null;
    for(let index of tecnologias){
   obj = tecnologias.sort()
   }
   let obj2 = [];
 
   if (obj != null){
     for(let index = 0; index < obj.length; index += 1) {
     obj2.push({
       tech:obj[index],
       name: nome,
     })
   }
   } else {
     return 'Vazio!'
   }
   return obj2
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
