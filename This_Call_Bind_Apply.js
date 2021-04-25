// THIS, CALL, BIND, APPLY

function hello() {
  console.log('hello', this)
}

// THIS is the reference to an object

const person = {
  name: "vladilen",
  age: 25,
  sayHello: hello
}

console.log(person)

person.sayHello() // now the method returns the OBJECT (this)

// THIS always specifies the object of the context: THIS.sayHello()

// How we can maintain it?

//====================================BIND

// What if we need to have a context of another object in the current object? use BIND(). For example:
const person1 = {
  name: "vladilen",
  age: 25,
  sayHello: hello,
  sayHelloPerson2: hello // it`s WRONG! Context is the Person1
}

const person2 = {
  name: "Ira",
  age: 42,
  sayHello: hello,
  sayHelloPerson2: hello.bind(person1) // It`s right
}

// Next example

const person3 = {
  name: "Michael",
  age: 55,
  sayHello: hello,
  sayHelloPerson2: hello.bind(person2),
  logInfo: function () {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
  }
}

const lena = {
  name: 'Elena',
  age: '23'
}

// How to call lena object it it has no SayHello function? Use BIND

person3.logInfo();

person3.logInfo.bind(lena)();

// Let`s make our example more complicated:

const person4 = {
  name: "Stan",
  age: 13,
  sayHello: hello,
  sayHelloPerson2: hello.bind(person2),
  logInfo: function (job, phone) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
  }
}

const dan = {
  name: 'Elena',
  age: '23'
}

const fnDanInfoLog = person4.logInfo.bind(dan);
fnDanInfoLog('FrontEnd', '+375 29 688 88 88');

// or

person4.logInfo.bind(dan)('FrontEnd', '+375 29 688 88 88')

// or

const fnDanInfoLog1 = person4.logInfo.bind(dan, 'FrontEnd', '+375 29 688 88 88');
fnDanInfoLog1()

//====================================CALL

person4.logInfo.bind(dan, 'FrontEnd', '+375 29 688 88 88')() // BIND returns the function, that we can call
person4.logInfo.call(dan, 'FrontEnd', '+375 29 688 88 88') // CALL immediately calls the function

//====================================APPLY

person4.logInfo.apply(dan, ['FrontEnd', '+375 29 688 88 88']) // APPLY accepts only TWO parameters, use arguments ARRAY

// The difference between CALL and APPLY is only the way of transmitting of ARGUMENTS

//====================================LET`S PRACTICE

// the task is to create a function(method) that multiplies every array element by 5
const array = [1, 2, 3, 4, 5]

// The first solution, not good

function multArr(arr, num) {
  return arr.map(function (i) {
    return i * num;
  });
}

// But the much better way is to add a method to a global object Array

Array.prototype.multBy = function (num) {
  return this.map(function (i) {
      return i * num
    }
  )
}

// now all the arrays will have .multBy(num) method, inherited from global Array.prototype


