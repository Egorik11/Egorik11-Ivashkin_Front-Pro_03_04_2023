const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, number) {
  const indexElement = arr.indexOf(number);
  arr.splice(indexElement, 1);
  return arr;
}
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
