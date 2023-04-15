//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
function showNumberWithStep() {
  for (let i = 20; i < 30; i += 0.5) {
    console.log(i);
  }
}

//2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
function showExchangeRate() {
  let currentCourse = 27;
  for (let i = 10; i <= 100; i += 10) {
    console.log(`Цена за ${i} долларов: ${currentCourse * i} грн.`);
  }
}

//3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
function showWholeNumbers(maxNumber) {
  for (let i = 1; i <= 100; i++) {
    const squareNumber = i * i;
    if (squareNumber < maxNumber) {
      console.log(i);
    }
  }
}

//4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

function primeNumber(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

//5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

function getNumberThree(num) {
  if (num === 0) {
    return false;
  }

  while (num % 3 === 0) {
    num = num / 3;
  }
  return num === 1;
}

primeNumber(17);
getNumberThree(9);
primeNumber();
showWholeNumbers(90);
showExchangeRate();
showNumberWithStep();
