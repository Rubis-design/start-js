//Проверка возраста
let age = 15;

if (age >= 18) {
  console.log('Вы совершеннолетний');
} else {
  console.log('Вы несовершеннолетний');
}

//Проверка числа на четность
let number = 11;

if (number % 2 === 0) {
  console.log('Число четное');
} else {
  console.log('Число нечетное');
}

//Оценка по числовой шкале
let score = 66;

if (score >= 80) {
  console.log('Отлично');
} else if (score >= 60) {
  console.log('Хорошо');
} else if (score >= 50) {
  console.log('Удовлетворительно');
} else {
  console.log('Неудовлетворительно');
}

//Конструкция switch
let day = 6;

switch (day) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
}

//Оценка по числовой шкале
let grade = 4;

switch (grade) {
  case 1:
    console.log('Плохо');
    break;
  case 2:
    console.log('Удовлетворительно');
    break;
  case 3:
    console.log('Хорошо');
    break;
  case 4:
    console.log('Очень хорошо');
    break;
  case 5:
    console.log('Отлично');
    break;
}

//Приветствие по времени суток
let hour = 55;
switch (true) {
  case hour >= 7 && hour <= 11:
    console.log('Доброе утро!');
    break;
  case hour >= 12 && hour <= 17:
    console.log('Добрый день!');
    break;
  case hour >= 18 && hour <= 23:
    console.log('Добрый вечер!');
    break;
  case hour >= 0 && hour <= 6:
    console.log('Доброй ночи!');
    break;
  default:
    console.log('Время дня не известно');
}

//цикл for
//Вывод чисел от 1 до 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//сумму чисел от 1 до 100
let sum = 0;
for (let a = 1; a <= 100; a++) {
  sum += a;
}
console.log(sum);

//Вывод четных чисел от 2 до 20
for (let q = 2; q <= 20; q++) {
  if (q % 2 === 0) {
    console.log(q);
  }
}

//циклы while
//вывод чисел от 1 до 10
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

//Сумма чисел от 1 до 50
let sum2 = 0;
let x = 1;

while (x <= 50) {
  sum2 += x;
  x++;
}
console.log(sum2);

//Вывод четных чисел от 2 до 20
let j = 2;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}
