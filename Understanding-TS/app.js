/* core types of typescript
1. Number: there are no special types for intergers or floats. number is Number
2. String: "", '' and ``=>  string literals
3. booleran: true or false
*/
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    return n1 + n2;
}
var num1 = 52;
var num2 = 4;
var printResult = true;
var resultPhrase = "Result is: ";
add(num1, num2, printResult, resultPhrase);
var payRoll = /** @class */ (function () {
    function payRoll() {
        this._pay = 0;
    }
    Object.defineProperty(payRoll.prototype, "fullPay", {
        get: function () {
            return this._pay;
        },
        set: function (value) {
            if (value < 80)
                throw new Error("Pay must be atleast 80 dollars");
            this._pay = value;
        },
        enumerable: false,
        configurable: true
    });
    return payRoll;
}());
