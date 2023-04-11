const firstNum = +prompt('Введите число');
const secondNum = +prompt('Введите число');

function showMathOperations(param) {
  let result;
  switch (param) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      break;
  }
  alert(result);
}
showMathOperations('+');
showMathOperations('-');
showMathOperations('*');
showMathOperations('/');

// alert(`Вычитание чисел ${firstNum} и ${secondNum}: ${firstNum - secondNum}`);
// alert(`Сложение чисел ${firstNum} и ${secondNum}: ${firstNum + secondNum}`);
// alert(`Деление чисел ${firstNum} и ${secondNum}: ${firstNum / secondNum}`);
// alert(`Умножение чисел ${firstNum} и ${secondNum}: ${firstNum * secondNum}`);
