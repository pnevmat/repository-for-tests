// debugger;
// const Account = function(log, mail) {
//     this.login = log;
//     this.email = mail;
//   };

//   Account.prototype.getInfo = function() {
//     const result = `login : ${this.login}, email: ${this.email}`;
//     return result;
//   };

//console.log(typeof Account.prototype.getInfo);
// 'function'

// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account( 'Poly', 'poly@mail.com');
//console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'



// class User {
//     constructor(name, age, followers) {
//       this.name = name;
//       this.age = age;
//       this.followers = followers;
//     };
//     getInfo() {
//         const result = `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//         return result;
//     };
//   };
  
//   console.log(typeof User);
// 'function'
  
//   const mango = new User('Mango', 2, 20);
//   console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'
  
// console.log(typeof mango.getInfo); 
// 'function'  
  
// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'

// debugger;
// class Storage {
//     constructor(items) {
//         this.items = items;
//     };
//     getItems() {
//         const result = this.items;
//         return result;
//     };
//     addItem(item) {
//         this.items.push(item);
//     };
//     removeItem(item) {
//         for (let i = 0; i <= this.items.length; i += 1) {
//           if (this.items[i] === item) {
//             this.items.splice(i, 1);
//           };
//         };
//     };
// };  
  
//   console.log(typeof Storage);
  // 'function'
  
//   const goods = [
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор'
//   ];
  
//   const storage = new Storage(goods);
  
//   console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ] */
  
//   storage.addItem('Дроид');
//   console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */
  
  // storage.removeItem('Пролонгер');
  // console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */  



//   class StringBuilder {
//     constructor(str) {
//       this._value = str;
//     };
//     get value() {
//       return this._value;
//     };
//     append(str) {
//       this._value += str;
//     };
//     prepend(str) {
//       this._value = str + this._value;
//     };
//     pad(str) {
//       this.prepend(str);
//       this.append(str);
//     };
//   };  
  
//   console.log(typeof StringBuilder);
  // 'function'
  
  
//   const builder = new StringBuilder('.');
  
//   builder.append('^');
//   console.log(builder.value); // '.^'
  
//   builder.prepend('^');
//   console.log(builder.value); // '^.^'
  
//   builder.pad('=');
//   console.log(builder.value); // '=^.^='
  

// Мой вариант кода
// debugger;
// class Car {
// Write code under this line
  //   constructor(car) {
  //       this.car = car;
  //   };
  //   static getSpecs(car){
  //       const result = `maxSpeed: ${car.car.maxSpeed}, speed: ${car.car.speed}, isOn: ${car.car.isOn}, distance: ${car.car.distance}, price: ${car.car.price}`;
  //       return result;
  //   };
  //   get price() {
  //      return this.car.price;
  //   };
  //   set price(value) {
  //      this.car.price = value;
  //   };
  //   turnOn() {
  //      this.car.isOn = true;
  //   };
  //   turnOff() {
  //      this.car.isOn = false;
  //      this.car.speed = 0;
  //   };
  //   accelerate(value) {
  //       if (this.car.speed + value > this.car.maxSpeed) {
  //           this.car.speed = this.car.maxSpeed;
  //       } else {
  //           this.car.speed = value;
  //       }
  //   };
  //   decelerate(value) {
  //       if (this.car.isOn === true) {
  //           this.car.speed -= value;
  //       } else {
  //           this.car.speed = 0;
  //       }
  //   };
  //   drive(hours) {
  //      if (this.car.distance === undefined || this.car.driveHours === undefined) {
  //          this.car.driveHours = hours;
  //          this.car.distance = this.car.speed * hours;
  //      } else {
  //       this.car.distance += this.car.speed * hours;
  //      }
  //   };
  //  }
    
  //  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  //  mustang.turnOn();
  //  mustang.accelerate(50);
  //  mustang.drive(2);
   
  //  console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   
  //  mustang.decelerate(20);
  //  mustang.drive(1);
  //  mustang.turnOff();
   
  //  console.log(Car.getSpecs(mustang));
   // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
   
  //  console.log(mustang.price); // 2000
  //  mustang.price = 4000;
  //  console.log(mustang.price); // 4000



// Мне подсказали вариант кода
// debugger;
// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     let result = '';
//     const entries = Object.entries(car);
//     for (const entry of entries) {
//       result += `${entry[0]}: ${entry[1]}, `
//     }
//      return result;
//     //  `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
//    }
//    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     (this.maxSpeed = maxSpeed),
//     (this.speed = speed),
//     (this.isOn = isOn),
//     (this.distance = distance),
//     (this.price = price);
//   }
//    get price() {
//      return this._price;
//    }
//    set price(value) {
//      this._price = value;
//    }
//    turnOn() {
//      this.isOn = true;
//    }
//    turnOff() {
//      this.isOn = false;
//      this.speed = 0;
//    }
//    accelerate(value) {
//      this.speed =
//        this.speed + value > this.maxSpeed ? this.maxSpeed : this.speed + value;
//    }
//    decelerate(value) {
//      this.speed = this.speed - value < 0 ? 0 : this.speed - value;
//    }
//    drive(hours) {
//      this.distance = this.isOn === true ? this.distance + hours * this.speed : this.distance;
//    }
//  }
  
//  const mustang = new Car({ maxSpeed: 200, price: 2000 });
//  mustang.turnOn();
//  mustang.accelerate(50);
//  mustang.drive(2);
 
//  console.log(Car.getSpecs(mustang));
//  // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 
//  mustang.decelerate(20);
//  mustang.drive(1);
//  mustang.turnOff();
 
//  console.log(Car.getSpecs(mustang));
//  // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
 
//  console.log(mustang.price); // 2000
//  mustang.price = 4000;
//  console.log(mustang.price); // 4000


// debugger;
// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
//   }
//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     (this.speed = speed),
//     (this._price = price),
//     (this.maxSpeed = maxSpeed),
//     (this.isOn = isOn),
//     (this.distance = distance);
//    };
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   accelerate(value) {
//     this.speed = this.speed + value > this.maxSpeed ? this.maxSpeed : this.speed + value;
//   }
//   decelerate(value) {
//     this.speed = this.speed - value < 0 ? 0 : this.speed - value;
//   }
//   drive(hours) {
//     this.distance = this.isOn ? this.distance + hours * this.speed : this.distance;
//   }
// };
  
// const mustang = new Car({maxSpeed:200, price:2000});
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
 
// console.log(Car.getSpecs(mustang));
//  // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
 
// console.log(Car.getSpecs(mustang));
//  // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'
 
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000 
 