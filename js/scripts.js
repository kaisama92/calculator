function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The result of the division of " + number1 + " and " + number2 + " is: " + divide(number1, number2)) 

window.alert("The result of the multiplication of " + number1 + " and " + number2 + " is: " + multiply(number1, number2));

window.alert("The result of the addition of " + number1 + " and " + number2 + " is: " + add(number1, number2));

window.alert("The result of the subtraction of " + number1 + " and " + number2 + " is: " + subtract(number1, number2));

window.alert(
  number1 + "+" + number2 + " = " + add(number1, number2) + "\n" + number1 + "*" + number2 + "=" + multiply(number1, number2) + "\n" + number1 + "/" + number2 + "=" + divide(number1, number2) + "\n" + number1 + "-" + number2 + "=" + subtract(number1, number2)
  )