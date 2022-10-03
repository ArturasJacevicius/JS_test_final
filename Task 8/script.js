/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(number1, number2) {
  this.a = number1;
  this.b = number2;
}

Calculator.prototype.sum = function () {
  return this.a + this.b;
};
Calculator.prototype.subtraction = function () {
  return this.a - this.b;
};
Calculator.prototype.multiplication = function () {
  return this.a * this.b;
};
Calculator.prototype.division = function () {
  return this.a / this.b;
};

const test = new Calculator(10, 2);

console.log(test.sum());
console.log(test.multiplication());
console.log(test.subtraction());
console.log(test.division());
