// CLOSURES are the function in another function

// function createCalcFunction(n) {
//   return function() {
//     console.log(1000*n)
//   }
// }
//
// const calc = createCalcFunction(42)
//
// calc()

// How do we use it?

function createIncrementor(n) {
  return function (num) {
    return n + num;
  }
}

const addOne = createIncrementor(1) // we want to close the function to value n = 1

console.log(addOne(10)) // the first function is closed for n = 1 , so function returns 11, because num = 10
console.log(addOne(41)) // the first function is closed for n = 1 , so function returns 42, because num = 41

// Let`s create function addTen

const addTen = createIncrementor(10);

console.log(addTen(10));// the first function is closed for n = 10 , so function returns 20, because num = 10
console.log(addTen(41));// the first function is closed for n = 10 , so function returns 51, because num = 41

// Let`s create function urlGenerator

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')
console.log(comUrl('googe')) // https://googe.com
console.log(comUrl('netflix')) //https://netflix.com

const ruUrl = urlGenerator('by')
console.log(ruUrl('tut')) //https://tut.by
console.log(ruUrl('onliner')) //https://onliner.by

// Let`s solve the task.

// You have to create a function, that do as following:

// function logPerson() {
//   console.log('Person: ${this.name}, ${this.age}, ${this.job}`)
// }
//
// const person1 = {name: 'Michael', age: 22, job: 'Frontend'}
// const person2 = {name: 'Helen', age: 27, job: 'SMM'}
//
// bind(person1, logPerson)
// bind(person1, logPerson)


function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args)
  }
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Michael', age: 22, job: 'Frontend'}
const person2 = {name: 'Helen', age: 27, job: 'SMM'}

bind(person1, logPerson)()
bind(person2, logPerson)()
