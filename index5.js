//Объекты и копирование объектов
//Создание и вывод объекта
let person = {
  name: 'Irina',
  age: 37,
  city: 'Saint-Peterburg',
};

console.log(person.name);
console.log(person.age);
console.log(person['city']);

//Копирование объекта
let origin = {
  name: 'Original Object',
  value: 100,
  description: 'This is the original object.',
};

let copy = { ...origin };
copy.value = 120;
console.log(origin);
console.log(copy);

//Копирование объекта с Object.assign
let person2 = {
  name: 'Manya',
  age: 15,
  status: 'schoolgirl',
};
let clone = Object.assign({}, person2);

clone.name = 'Olya';
console.log(person2);
console.log(clone);

//Опциональная цепочка
//Проверка наличия свойства
let user = {};
const city = user?.address?.city;

//Работа с вложенными свойствами
let location = {
  adress: {
    zip: 195299,
    city: 'Saint-Peterburg',
    street: 'Chercasova',
  },
};
console.log(location?.adress?.zip);
console.log(location?.adress?.flat);

//Безопасный доступ к элементам массива
let data = {
  items: ['novel', 'detective', 'prose'],
};

console.log(data?.items?.[0]);

//Object.keys, .values, .entries
//Получение ключей объекта
let keys = Object.keys(person);
console.log(keys);

//Получение значений объекта
let car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
};

let values = Object.values(car);
console.log(values);

//Получение пар ключ-значение
let privateDate = Object.entries(person);
console.log(privateDate);

//Формат JSON
//Преобразование объекта в JSON
let user2 = {
  nickname: 'terminator',
  dateOfRegestration: '11.09.2020',
};
let stringUser = JSON.stringify(user2);

console.log(stringUser);

//Преобразование JSON в объект
let jsonString = '{"name": "Alice", "age": 30}';
let obj = JSON.parse(jsonString);
console.log(obj);

//Обработка JSON с вложенными объектами
let jsonStr = `
{
  "name": "Alice",
  "age": 30,
  "address": {
    "city": "New York",
    "street": "5th Avenue"
  },
  "hobbies": ["reading", "traveling", "swimming"]
}
`;

let object = JSON.parse(jsonStr);
console.log(object);

//Массивы и методы массивов
//Создание массива и добавление элемента
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);

//Использование метода .map()
let numbers = [2, 4, 7, 9, 11, 16, 19, 22, 24];
let squaredNumbers = numbers.map((el) => el ** 2);
console.log(squaredNumbers);

//Фильтрация массива с .filter()
let evenNumbers = numbers.filter((el) => el % 2 === 0);
console.log(evenNumbers);

//Деструктуризация и деструктурирующее присваивание
//Деструктуризация объекта
let person3 = {
  name: 'Alice',
  age: 30,
};

let { name, age } = person3;
console.log(name);
console.log(age);

//Деструктуризация массива
let fruitsArray = ['яблоко', 'банан', 'груша'];
let [first, second, ...rest] = fruitsArray;
console.log(first);
console.log(second);

//Деструктурирующее присваивание с значениями по умолчанию
let person4 = {
  name: 'Vova',
  male: 'man',
};

let { name1 = 'Maks', age1 = 20, male } = person4;
console.log(name1);
console.log(age1);
