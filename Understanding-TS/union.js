"the function below is an example of a union type in typescript, where parameter and functions are allowed to handle more than one type and depending on the assigned type, perform certain operations or actions";
// introducing the concept of literals with work with the union type of ts we cnan also make use of type alias which store the unions in oreder to make our code less ambigious and easy to read
function combine(input1, input2) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
var combinedNumbers = combine(16, 90);
console.log(combinedNumbers);
var combinedWords = combine('Tosin', 'richest man in Africa');
console.log(combinedWords);
function combination(input1, input2, resultConverter) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultConverter == 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var kon = combination(12, 34, 'as-text');
console.log(kon);
var jon = combination('12', '34', 'as-number');
console.log(jon);
function profile(name, age, score, rank, class_) {
    console.log("my name is " + name + ", i am in class " + class_);
}
function profileCreattion(firstName, surname, age, score, rank, class_) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
    this.score = score;
    this.rank = rank;
    this.class_ = class_;
    this.fullname = this.firstName + " " + this.surname;
    this.serviceYears = function (value) {
        var currentYear = new Date().getFullYear();
        return currentYear - value;
    };
}
var tomisin = new profileCreattion('tomisin', 'debayo', 21, 89, 'rank 1', 'class 1');
console.log(tomisin.fullname);
console.log(tomisin.serviceYears(1988));
