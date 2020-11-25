"it is important to note that typescript only helps during compliation or development and does not change your run time code"
/* core types of typescript
1. Number: there are no special types for intergers or floats. number is Number
2. String: "", '' and ``=>  string literals
3. booleran: true or false
*/

function addition(n1: number, n2: number) {
  return n1 + n2
}

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

// In assigning types, typescript by default knows from the content of the variable the type that it is. and in a case where the variable is initialized, you can then specify the data type

let tosin: number;
tosin = 89;
let toph: string;
toph = "toph baefoong";

let num1 = 52;
let num2 = 4;
const printResult = true;
const resultPhrase = "Result is: ";

add(num1, num2, printResult, resultPhrase);

class payRoll {
  _pay: number = 0;

  set fullPay(value: number) {
    if (value < 80) throw new Error("Pay must be atleast 80 dollars");
    this._pay = value;
  }
  get fullPay() {
    return this._pay;
  }
}

let intro: number;
intro = 67
const chorus: string = 'baba tete shey o'





