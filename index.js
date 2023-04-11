const arr = [
  +prompt('Введите число'),
  +prompt('Введите число'),
  +prompt('Введите число'),
];

let summ = 0;

for (let i = 0; i < arr.length; i++) {
  summ += arr[i];
}

const avarage = summ / arr.length;
const result = avarage.toFixed(1);

alert(result);
