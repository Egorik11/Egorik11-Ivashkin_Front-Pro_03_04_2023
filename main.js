function sum() {
  let sum = 0;
  return function (num) {
    return (sum += num);
  };
}

const sumNumber = sum();
console.log(sumNumber(3));
console.log(sumNumber(5));
