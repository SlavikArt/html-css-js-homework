/* Створіть об’єкт, що зберігає окремий чисельник і знаменник
дробу, і наступні функції для роботи з цим об’єктом.
1. Функція ділення 2 об’єктів-дробів.
2. Функція скорочення об’єкта-дробу */
class Fraction {
  constructor(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    this.numerator = numerator;
    this.denominator = denominator;
    this.reduce();
  }

  reduce() {
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const divisor = gcd(this.numerator, this.denominator);
    this.numerator /= divisor;
    this.denominator /= divisor;
  }

  static add(fraction1, fraction2) {
    const newNumerator =
      fraction1.numerator * fraction2.denominator +
      fraction2.numerator * fraction1.denominator;
    const newDenominator = fraction1.denominator * fraction2.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  static subtract(fraction1, fraction2) {
    const newNumerator =
      fraction1.numerator * fraction2.denominator -
      fraction2.numerator * fraction1.denominator;
    const newDenominator = fraction1.denominator * fraction2.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  static multiply(fraction1, fraction2) {
    const newNumerator = fraction1.numerator * fraction2.numerator;
    const newDenominator = fraction1.denominator * fraction2.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  static divide(fraction1, fraction2) {
    const newNumerator = fraction1.numerator * fraction2.denominator;
    const newDenominator = fraction1.denominator * fraction2.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  toDecimal() {
    return this.numerator / this.denominator;
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

const fraction1 = new Fraction(1, 2);
const fraction2 = new Fraction(1, 3);
const fraction3 = new Fraction(8, 12);

const resultAdd = Fraction.add(fraction1, fraction2);
const resultSubtract = Fraction.subtract(fraction1, fraction2);
const resultMultiply = Fraction.multiply(fraction1, fraction2);
const resultDivide = Fraction.divide(fraction1, fraction2);

console.log(resultAdd.toString()); // 5/6
console.log(resultSubtract.toString()); // 1/6
console.log(resultMultiply.toString()); // 1/6
console.log(resultDivide.toString()); // 3/2
console.log(fraction3.toString()); // 2/3
console.log(fraction3.toDecimal()); // 0.6666666666666666
