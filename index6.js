//setTimeout и setInterval
setTimeout(() => {
  console.log('Привет через 3 секунды!');
}, 3000);

//использование setInterval
let intervalID = setInterval(() => {
  console.log('Привет каждые 2 секунды');
}, 2000);
setTimeout(() => {
  clearInterval(intervalID);
}, 6000);

//Смена цвета
let intervalID2 = setInterval(function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
}, 5000);
setTimeout(() => {
  clearInterval(intervalID2);
}, 20000);

//Коллбэки
//Простая функция с коллбэком
function fetchData(callback) {
  setTimeout(() => {
    console.log('Получение данных...');
    callback();
  }, 2000);
}

function toFetchData() {
  console.log('Данные получены!');
}

fetchData(toFetchData);

//Обработка ошибок в коллбэках
function divide(num1, num2, callback) {
  if (num2 === 0) {
    callback(new Error('Нельзя делить на 0'));
  } else {
    let result = num1 / num2;
    callback(result);
  }
}

function devideResult(result) {
  console.log(result);
}

divide(10, 2, devideResult);

//Коллбэки в цепочке
function step1(cb) {
  setTimeout(() => {
    cb();
  }, 1000);
}

function step2() {
  console.log('Шаг 1 завершен');
}

step1(step2);

//Простой промис
const promise = new Promise((resolve, _reject) => {
  setTimeout(() => {
    console.log('Промис выполнен');
  }, 2000);
});
promise.then((message) => {
  console.log(message);
});

//Промис с ошибкой
const promise2 = new Promise((_resolve, reject) => {
  setTimeout(() => {
    reject('Error');
  }, 3000);
});
promise2.catch((message) => {
  console.log(message);
});

//Цепочка промисов
const firstPromise = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve('Первый промис');
  }, 1000);
});

const secondPromise = firstPromise.then((result) => {
  console.log(result);
  return 'Второй промис';
});

secondPromise.then((result) => {
  console.log(result);
});

//Конструкция async/await
//Простая асинхронная функция
async function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Данные получены!');
    }, 2000);
  });
}
async function getData() {
  let result = await fetchDataAsync();
  console.log(result);
}
getData();

//Обработка ошибок с async/await
async function divideAsync(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
  }
}

divideAsync(10, 2)
  .then((result) => console.log('Результат:', result))
  .catch((error) => console.error('Ошибка:', error));

//Цепочка асинхронных вызовов
async function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Шаг 1 завершен');
    });
  });
}

async function stepTwo(result) {
  let result2 = 'Шаг 2 завершен';
  let mainResult = result + ' ' + result2;
  return mainResult;
}

async function stepThree() {
  let stepOneResult = await stepOne();
  let stepTwoResult = await stepTwo(stepOneResult);
  console.log(stepTwoResult);
}

stepThree();

//Обработка ошибок
//Простая обработка ошибок
function divideNumbers(n1, n2) {
  try {
    if (n2 === 0) {
      throw new Error('Деление на ноль невозможно');
    } else {
      console.log(n1 / n2);
    }
  } catch (error) {
    console.log(error);
  }
}

divideNumbers(35, 5);

//Обработка ошибок в асинхронной функции
async function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Ошибка при получении данных'));
      } else {
        resolve('Данные получены');
      }
    }, 1000);
  });
}

async function fetchDataHandler(shouldFail) {
  try {
    const data = await fetchData(shouldFail);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

fetchDataHandler(false);
fetchDataHandler(true);

//
function parseJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new Error('Некорректный JSON');
  }
}

try {
  const json = '{"name":"John", "age":30, "city":"New York"}';
  const parsedObj = parseJson(json);
  console.log(parsedObj);
} catch (error) {
  console.error(error.message);
}
