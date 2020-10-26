// const getItemsString = function(array) {
//   'use strict';
//   // Write code under this line
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//      result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

//console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/



// const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(' ').length;
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

// function findLongestWord (string = "") {
//   // Write code under this line
//   const wordArray = string.split(' ');
//   let result = '';
//   for (let i = 0; i < wordArray.length; i += 1) {
//     let wordLength = wordArray[i];
//     if (result.length < wordLength.length) {
//       result = wordLength;
//     }
//   }
//   return result;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))



// function formatString (string, maxLength = 40) {
//   // Write code under this line
//   // debugger;
//   let result = '';
//   if (string.length <= maxLength) {
//     result = string;
//   } else if (string.length > maxLength) {
//     for (let i = 0; i < maxLength; i += 1) {
//       result += string[i];
//     }
//     result += '...';
//   }
//   return result;
// };

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));



// function checkForSpam (str) { 
//   'use strict';
//   // Write code under this line
//   let line = str.toLowerCase();
//   let result = line.includes('spam') || line.includes('sale');
//   return result;
// };

// console.log(checkForSpam('Latest technology news'));



// function mapArray(array) {
//   'use strict';
//   const numbers = new Array(array.length);
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers.shift(numbers[i]);
//     numbers.push(array[i] * 10);
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));


// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     } else {
//       break;
//     }
//   }
//   return numbers;
// };

// console.log(filterArray([0, -0, 100, '100']));


// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   } 
//   return total;
// };

//console.log(reduceArray([1, 2, 3]));

// Это нормальный код
// function isLoginValid (login, min = 4, max = 16) {
//   // Write code under this line
//   let result;
//   if (login.length >= min && login.length <= max) {
//     result = true;
//   } else if (login.length < min || login.length > max) {
//     result = false;
//   }
//   return result;
// };

// function isLoginUnique  (allLogins, login) {
//   'use strict';
//   // Write code under this line
//   debugger;
//   return allLogins.includes(login);
// };

// function addLogin (allLogins, login) {
//   'use strict';
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   // Write code under this line
//   if (isLoginValid(login) === true) {
//     if (isLoginUnique(allLogins, login) === false) {
//       logins.push(login);
//       message = SUCCESS;
//     } else {
//       message = REFUSAL;
//     }
//   } else {
//     message = ERROR;
//   }
//   return message;
// };

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123', '1234'];

// console.log(isLoginUnique(logins, 'ghter'));

// console.log(addLogin(logins, '1234'));


// Это гавно код
function isLoginValid (login, min = 4, max = 16) {
  // Write code under this line
  let result;
  if (login.length >= min && login.length <= max) {
    result = true;
  } else if (login.length < min || login.length > max) {
    result = false;
  }
  return result;
};

function isLoginUnique  (allLogins, login) {
  'use strict';
  // Write code under this line
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

function addLogin (allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line
  if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login) === true) {
      allLogins.push(login);
      message = SUCCESS;
    } else {
      message = REFUSAL;
    }
  } else {
    message = ERROR;
  }
  return message;
};

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
console.log(logins);
