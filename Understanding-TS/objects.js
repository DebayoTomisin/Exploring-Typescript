// OBJECTS
var seyi = {
    name: 'sheyie',
    maritalStatus: 'married',
    kids: 'none yet',
    age: '25'
};
console.log(seyi);
console.log(seyi.kids);
// there are also other ways of creating objects in typescript, but the method below is redundant.
var tosin = {
    name: 'demmy',
    score: 87,
    passed: true
};
console.log(tosin);
//ARRAYS
var person = {
    name: 'Demmy',
    age: 67,
    hobbies: ['playing basketball', 'watching anime content', 'sleeping'],
    languages: {
        python: 'level 4',
        javascript: 'level 3',
        typescript: 'level 2'
    }
};
console.log(person['languages']);
/* there are ways that arrays can be created, we can have type specific arrays and arrays that take in any type */
var favSports; // this is an array that takes in only strings
var scores; // this takes in an array of numbers
var things; // this takes in any type of value
favSports = ['basketball', 'football', 'baseball', 'boxing', 'mixed martial arts'];
scores = [19, 25, 90, 87, 66, 70, 55, 94];
things = ['apple pie', 12, 'ginger bread', false, true, 'this is it'];
console.log(favSports);
console.log(scores);
console.log(things);
var objArr; // note that doing this is not best practose cos it basically rids you of the functionalitoes that typescript offers
objArr = [{
        name: 'tosin',
        age: 19,
        school: 'federal University Technology Akure',
        score: 90
    }, ['basketball', 'football', 'otaku', 'precious'], true, 'i like woman i dey straight forward', 'Jon Bellion'];
/*const tomi: {
  name: string;
  age: number;
  class: string;
  role: [number, string, boolean] // this is a tuple, follows a specific pattern of execution and allows only a specified number of elements in this case is three
} = {
  name: 'Tomisin',
  age: 17,
  class: '400 level',
  role: [18, 'admin', false]
} */
"taking a look at the enum construct it basically serves as a place holder for content that can be accessed later, like it holds keys or something in that light, They can be used as identifiers basically, you can also assign your own values to them, we can also use strings too, it must have an initializer";
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
    Role[Role["READONLY"] = 3] = "READONLY";
})(Role || (Role = {}));
var Data;
(function (Data) {
    Data[Data["fola"] = 100] = "fola";
    Data[Data["tola"] = 900] = "tola";
    Data["jola"] = "author";
})(Data || (Data = {}));
var tomi = {
    name: 'Tomisin',
    age: 17,
    "class": '400 level',
    role: Role.ADMIN
};
// the any type is the most flexible type in ts, can store any type of type in it, as much as it seems easy, avoid using it, use as a fallback when you cant know which values will be coming in
var anyEx;
anyEx = 1;
