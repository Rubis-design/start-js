//базовые операторы
//Арифметические операции
let x = 8;
let y = 4;
console.log(x + y, x - y, x * y, x / y);

//Инкремент и декремент
let counter = 10;
counter++;
console.log(counter);
counter--;
console.log(counter);

//Операторы присваивания
let num = 5;
num += 3;
num -= 2;
console.log(num);

//Математика
//Округление чисел
let price = 19.99;
console.log(Math.round(price));

//возведение в степень
let base = 3;
let exponent = 4;
console.log(base ** exponent);

//поиск минимального значения
let a = 5;
let b = 9;
let c = 3;
console.log('Min number ' + Math.min(a, b, c));
console.log('Max number ' + Math.max(a, b, c));

//Операторы сравнения
//Сравнение чисел
let a2 = 10;
let b2 = 20;
console.log(a >= b);

//Проверка равенства
let firstName = 'John';
let lastName = 'John';
console.log(firstName === lastName);

let num2 = 0;
let str = '';
console.log(num2 == str);
//true потому что при сравнении == сравнивается значение приведенное к числу, без сравнения типа данных. так пустая срока это тоже 0

//Проверка неравенства
let age = 18;
console.log(age !== 21);

//Логические операторы
// Использование оператора AND
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID);

//Использование оператора OR
let isMember = false;
let isGuest = true;
console.log(isMember || isGuest);

//Использование оператора NOT
let isOnline = true;
console.log(!isOnline);
