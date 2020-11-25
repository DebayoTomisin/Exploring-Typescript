
"the function below is an example of a union type in typescript, where parameter and functions are allowed to handle more than one type and depending on the assigned type, perform certain operations or actions"

// introducing the concept of literals with work with the union type of ts we cnan also make use of type alias which store the unions in oreder to make our code less ambigious and easy to read

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + ' ' + input2.toString()
    }
    return result
}

const combinedNumbers = combine(16, 90)
console.log(combinedNumbers)

const combinedWords = combine('Tosin', 'richest man in Africa')
console.log(combinedWords)

// this is the type alias
type inputType = number | string
type resultConvert = 'as-number' | 'as-text'

function combination(
    input1: inputType,
    input2: inputType,
    resultConverter: resultConvert) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultConverter == 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const kon = combination(12, 34, 'as-text')
console.log(kon)

const jon = combination('12', '34', 'as-number')
console.log(jon)

type nameEval = string | object;
type ageEval = string | number;
type scoreEval = string | number;
function profile(
    name: nameEval,
    age: ageEval,
    score: scoreEval,
    rank: string,
    class_: string) {
    console.log(`my name is ${name}, i am in class ${class_}`)
}


function profileCreattion(firstName: nameEval, surname: nameEval, age: ageEval, score: scoreEval, rank: string, class_: string) {
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
    this.score = score
    this.rank = rank
    this.class_ = class_

    this.fullname = `${this.firstName} ${this.surname}`

    this.serviceYears = function (value) {
        let currentYear = new Date().getFullYear()
        return currentYear - value
    }

}

let tomisin = new profileCreattion('tomisin', 'debayo', 21, 89, 'rank 1', 'class 1')

console.log(tomisin.fullname)
console.log(tomisin.serviceYears(1988))
