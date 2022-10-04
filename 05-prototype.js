const person = {
    celebrateBirthday() {
        this.age++;
    }
};

// peron is the prototype for john
const john = {
    name: 'John',
    age: 32,
    __proto__: person
};

// peron is the prototype for jane
const jane = {
    name: 'Jane',
    age: 28,
    __proto__: person
};


john.celebrateBirthday;
jane.celebrateBirthday;

console.log(john);
console.log(jane);