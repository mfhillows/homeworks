let n = +prompt("enter a number:");
let first = 0;
let second = 1;
let result;

function Fibonaccio(first, second, n) {
  if (n == 0) {
    return first;
  } else if (n == 1) {
    return second;
  } else if (n > 1) {
    return Fibonaccio(first, second, n - 1) + Fibonaccio(first, second, n - 2);
  } else if (n < 1) {
    n = n * -1;
    return Fibonaccio(first, second, n - 1) + Fibonaccio(first, second, n - 2);
  }
}
result = Fibonaccio(first, second, n);
alert(`Your number: ${result}`);
