// OBJECTS

const seyi = {
  name: 'sheyie',
  maritalStatus: 'married',
  kids: 'none yet',
  age: '25'
}
console.log(seyi)
console.log(seyi.kids)
// there are also other ways of creating objects in typescript, but the method below is redundant.

const tosin: {
  name: string;
  score: number;
  passed: boolean
} = {
  name: 'demmy',
  score: 87,
  passed: true
}

console.log(tosin)

//ARRAYS
const person: object = {
  name: 'Demmy',
  age: 67,
  hobbies: ['playing basketball', 'watching anime content', 'sleeping'],
  languages: {
    python: 'level 4',
    javascript: 'level 3',
    typescript: 'level 2',
  }
}

console.log(person['languages'])
/* there are ways that arrays can be created, we can have type specific arrays and arrays that take in any type */

let favSports: string[]; // this is an array that takes in only strings

let scores: number[]; // this takes in an array of numbers

let things: any[]; // this takes in any type of value

favSports = ['basketball', 'football', 'baseball', 'boxing', 'mixed martial arts']
scores = [19, 25, 90, 87, 66, 70, 55, 94]
things = ['apple pie', 12, 'ginger bread', false, true, 'this is it']
console.log(favSports)
console.log(scores)
console.log(things)

let objArr: any[]; // note that doing this is not best practose cos it basically rids you of the functionalitoes that typescript offers
objArr = [{
  name: 'tosin',
  age: 19,
  school: 'federal University Technology Akure',
  score: 90
}, ['basketball', 'football', 'otaku', 'precious'], true, 'i like woman i dey straight forward', 'Jon Bellion']

const bob: {
  name: string;
  age: number;
  class: string;
  role: [number, string, boolean] // this is a tuple, follows a specific pattern of execution and allows only a specified number of elements in this case is three
} = {
  name: 'Tomisin',
  age: 17,
  class: '400 level',
  role: [18, 'admin', false]
}

"taking a look at the enum construct it basically serves as a place holder for content that can be accessed later, like it holds keys or something in that light, They can be used as identifiers basically, you can also assign your own values to them, we can also use strings too, it must have an initializer"

enum Role { ADMIN = 'Admin', AUTHOR = 2, READONLY }
enum Data { fola = 100, tola = 900, jola = 'author' }
enum positions { CEO, MD, BM, OM = 'Operations Manager', TL = 'Team Lead' };

const tomi = {
  name: 'Tomisin',
  age: 17,
  class: '400 level',
  role: Role.ADMIN,
  position: positions.TL
}

// the any type is the most flexible type in ts, can store any type of type in it, as much as it seems easy, avoid using it, use as a fallback when you cant know which values will be coming in

let anyEx: any
anyEx = 1




