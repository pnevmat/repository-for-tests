// const name = '«Генератор защитного поля»'; // Write code on this line
// let price = 1000; // Write code on this line
// firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// console.log(firstMessage);
// price = 2000;
// secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// console.log(secondMessage);

// console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'


// const userPassword = null;
// console.log(userPassword);

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
//   console.log(ACCESS_IS_ALLOWED)
// } else if (userPassword == null) {
//   console.log(CANCELED_BY_USER)
// } else {
//   console.log(ACCESS_DENIED)
// };

// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = orderPieces * pricePerDroid; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // Write code under this line
// if (orderPieces >= 1) {
//     if (totalPrice <= credits) {
//         message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
//     } else {
//         message = 'Недостаточно средств на счету!'
//     }
// } else if (orderPieces == null) {
//     message = 'Отменено пользователем!'
// } else if (orderPieces === 0) {
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
// } else {
//     message = 'Выполнена недопустимая операция!'
// };

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'


const countryName = "КитаЙ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  console.log(country);
  switch (country) {
  // Write code under this line
    case 'Китай':
      price = 100;
      break;
    case 'Австралия':
      price = 170;
      break;
    case 'Индия':
      price = 80;
      break;
    case 'Ямайка':
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) { // Write code on this line
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
  console.log(message);
}

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'