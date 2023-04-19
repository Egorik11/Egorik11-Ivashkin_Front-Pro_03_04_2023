function sum() {
  let sum = 0;
  return function (num) {
    return (sum += num);
  };
}

const sumNumber = sum();
sumNumber(3);
sumNumber(5);
