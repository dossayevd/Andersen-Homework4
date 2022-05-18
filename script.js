/*1 Задача */
function concatStrings(string, separator, finish) {
  
  return function(nextString) {

    if (nextString === undefined) {

      return string;

    }

    else if (typeof nextString !==  'string' || finish) {

      return concatStrings(string, null, true)

      }

    else {

      return concatStrings(string + (separator ? separator : '') + nextString, separator);

    }
  }
}



console.log(concatStrings('first')('second')('third')())
console.log(concatStrings('some-value')('333')(123n)())
console.log(concatStrings('first', null)('second')())
console.log(concatStrings('some-value')('')('')(null)())
console.log(concatStrings('first', '-')('second')('third')(null)('fourth')())




/*2 Задача */
class Calculator {
  constructor(X, Y) {
    const isInvalid =
      typeof X !== 'number' ||
      typeof Y !== 'number' ||
      isNaN(X) ||
      isNaN(Y) ||
      !isFinite(X) ||
      !isFinite(Y);

    if (isInvalid) {
      throw new Error('Ошибка!');
    }

    this.X = X;
    this.Y = Y;
  }

  setX() {
    this.X = 9;
  }

  setY() {
    this.Y = 4;
  }

  logSum() {
    this.X + this.Y;
  }

  logMul() {
    this.X * this.Y;
  }

  logSub() {
    this.X - this.Y;
  }

  logDiv() {
    if (this.Y === 0) {
      throw new Error('Ошибка!');
    }
    this.X / this.Y;
  }
}

const calculator = new Calculator(6, 3);

calculator.setX();
calculator.logSum();
calculator.setY();
calculator.logMul();
calculator.logSub();
calculator.logDiv();
