function profileCreation(firstName, surname, age, rank) {
    this.firstName = firstName,
        this.surname = surname,
        this.age = age;
    this.rank = rank;
    this.servieYears = function (value) {
        var currentYear = new Date().getFullYear();
        var yearServed = currentYear - value;
        return "the number of years spent is set at " + yearServed;
    };
    this.fullname = this.firstName + " " + this.surname;
}
var grip = new profileCreation('Alex', 'Nubel', 21, 'rank 12');
console.log(grip.fullname);
console.log(grip.servieYears(1978));
// one thing about typescript functions is the return type, ts infers the type that the return keyword is inheriting from the function paramenters and can also be manually set
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
function printResult(num) {
    console.log('Result: ' + num);
}
// function types are basically types that describe a function as regards the parameters and the return type of the function
printResult(add(12, 8));
var combineValues;
// what happens here is that any functon being assigned to this variable has to have two arguments of the type number and the return value also has to be of type number
combineValues = add;
console.log(combineValues(9, 20));
function callback(result) {
    console.log('the result from the call back function is', result);
}
addAndHandle(12, 67, callback);
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured at:', 500);
// the never type is basically telling the compiler that the function is to never return anything, its similar to viod but in this case, it is specially assigned to the function and nothing is ever returned.
