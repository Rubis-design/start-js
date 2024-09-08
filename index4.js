//Функции, function expression и function declaration
//Простой пример функции
function greet(name) {
  console.log(`${'Привет,'} ${name}${'!'}`);
}

greet('Irina');

//Функция как выражение
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 5));

//Функция для проверки четности числа
function isEven(num) {
  if (num % 2 === 0) return true;
  return false;
}

console.log(isEven(11));

//Стрелочные функции
//Сложение двух чисел
const sum = (a, b) => a + b;
console.log(sum(66, 34));

//Возведение числа в квадрат
const square = (n) => n * n;
console.log(square(9));

//Приветствие с именем
const sayHello = (firstName) => {
  return `${'Привет,'} ${firstName}${'!'}`;
};
console.log(sayHello('Ira'));

//Факториал числа
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

//Фибоначчи
function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

//Сумма чисел от 1 до N
function sum2(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + sum2(n - 1);
  }
}

console.log(sum2(10));

//Область видимости функции, замыкание
//Простое замыкание
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let counter = createCounter();
counter();
counter();
counter();

//Защищенное значение
function createSecret() {
  let secretText = '';
  return function () {
    secretText = 'секрет';
    return secretText;
  };
}

let secret = createSecret();
console.log(secret());

//Счетчик с начальным значением
function createCounterWithInitial(n) {
  let count = n;
  return function () {
    return count++;
  };
}

let isCounter = createCounterWithInitial(11);

console.log(isCounter());
console.log(isCounter());
console.log(isCounter());
