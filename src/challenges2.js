// Desafio 11
function generatePhoneNumber(param) {
  let tell = '';
  let temp = '';
  count = 0;

  for (let index = 0; index < param.length; index += 1) {
    count2 = 0
    for (let index2 = 0; index2 < param.length; index2 += 1) {
      if (param[index] === param[index2]) {
        count2 += 1
      }
    }
    if (param[index] < 0 || param[index] > 9) {
      tell = param[index]
    } else if (count2 > 2) {
      count = count2
    } else {

    }
  }

  if (param.length !== 11) {
    tell = 'Array com tamanho incorreto.'
  } else if (tell < 0 || tell > 9 || count > 2) {
    tell = 'não é possível gerar um número de telefone com esses valores';
  } else if (param.length === 11) {

    for (let index = 0; index < param.length; index += 1) {
      if (index === 0) {
        temp += '('
      } else if (index === 2) {
        temp += ')'
        tell += temp
        temp = ''
      } else if (index === 7) {
        tell += temp
        temp = ''
      }

      if (index <= 1) {
        temp += param[index]
      } else if (index > 1 && index <= 6) {
        if (index === 2) {
          temp += ' '
        }
        temp += param[index]
      } else if (index > 6) {
        if (index === 7) {
          temp += '-'
        } temp += param[index]
        if (index === param.length - 1) {
          tell += temp
        }
      }
    }
  }
  return tell
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
