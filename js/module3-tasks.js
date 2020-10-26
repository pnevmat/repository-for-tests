// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };
 
// //Write code under this line  
//  user.mood = 'happy';
//  user["full time"] = true;
//  user.hobby = 'skydiving';
//  user.premium = false;
//  console.log(user);
// const keys = Object.keys(user);
// // Write code under this line
// for (const key of keys) {
//     message += `${key}: ${user[key]}\n`;
// };
// console.log(message);


// const countProps = function(obj) {
//     'use strict';
//   // Write code under this line
//   let result = Object.keys(obj).length;
//   return result;
// };

// console.log(countProps({a:1, b:1}));


// const findBestEmployee = function (employees) {
//     'use strict';
//     // Write code under this line
//     let worksNumber = 0;
//     let result = '';
//     const entries = Object.entries(employees);
//     for (const entry of entries) {
//         if (entry[1] > worksNumber) {
//             worksNumber = entry[1];
//             result = entry[0];
//         }
//     }
//     return result;
//   };
  
  // Объекты и ожидаемый результат
//   const developers = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }; 
//   console.log(findBestEmployee(developers)); 
  // 'lorence'
  
//   const supports = {
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }; 
  //console.log(findBestEmployee(supports)); 
  // 'mango'
  
//   const sellers = {
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }
  //console.log(findBestEmployee(sellers));

//   console.log(findBestEmployee({}));




// const countTotalSalary = function(employees) {
//     'use strict';
//     // Write code under this line
//     const selary = Object.values(employees);
//     let result = 0;
//     for (const value of selary) {
//       result += value;
//     }
//     return result;
//   };
  
//   // Объекты и ожидаемый результат
//   const developers = {
//       mango: 300,
//       poly: 250,
//       alfred: 450,
//   };
//   console.log(countTotalSalary(developers));
  // 1000
  
//   const supports = {
//     kiwi: 200,
//     lux: 150,
//     chelsy: 150,
//   }
  //console.log(countTotalSalary(supports));
  // 500
  


//   function getAllPropValues (array, prop) {
//     'use strict';
//     // Write code under this line 
//     let result = [];
//     for (const product of products) {
//         if (product[prop] !== undefined) {
//             result.push(product[prop]);
//         } 
//     }
//     return result;
//   }
  
  // Объекты и ожидаемый результат
//   const products = [
//       { name: 'Радар', price: 1300, quantity: 4 },
//       { name: 'Радар', price: 1280, quantity: 2 },
//       { name: 'Радар', price: 1320, quantity: 1 },
//       { name: 'Сканер', price: 2700, quantity: 1 },
//       { name: 'Сканер', price: 2500, quantity: 3 },
//       { name: 'Дроид', price: 400, quantity: 7 },
//       { name: 'Захват', price: 1200, quantity: 2 },
//   ]; 
  
//   console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
//   console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category'));
  //  []
  



//   function calculateTotalPrice (array, prop) {
//     'use strict';
//     // Write code under this line
//     let result = 0;
//     for (const product of array) {
//         if (product['name'] !== undefined && product['name'] === prop) {
//             result += product['price'] * product['quantity'];
//         } 
//     }
//     return result;
//   }
  
  // Объекты и ожидаемый результат
//   const products = [
//       { name: 'Радар', price: 1300, quantity: 4 },
//       { name: 'Радар', price: 1280, quantity: 2 },
//       { name: 'Радар', price: 1320, quantity: 1 },
//       { name: 'Сканер', price: 2700, quantity: 1 },
//       { name: 'Сканер', price: 2500, quantity: 3 },
//       { name: 'Дроид', price: 400, quantity: 7 },
//       { name: 'Захват', price: 1200, quantity: 2 }
//   ]; 
  
//   console.log(calculateTotalPrice(products, 'Радар'));  
  // 9080
  
  //console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
  //console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
  //console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800