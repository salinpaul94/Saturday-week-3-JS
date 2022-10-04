// "this" -> function (call) context
console.log( this );

function foo() {
    console.log( 'within foo, this = ', this);
}

// const john = {
//     name: 'John',
//     age: 32,
//     celebrateBirthday() {
//         console.log( 'john.celebrateBirthday, this = ', this);
//         this.age++;
//     }
// };

const john = {
    name: 'John',
    age: 32,
    celebrateBirthday( years ) {
        years = years || 1;
        console.log( 'john.celebrateBirthday, this = ', this);
        this.age += years;
    }
};

john.celebrateBirthday();
console.log( john );

// calls john.celebrateBirthday
// you can set what the "this" should be
// john.celebrateBirthday.call( null );
john.celebrateBirthday.call( john );
john.celebrateBirthday.call( john, 2 );

const jane = {
    name: 'Jane',
    age: 28
};

john.celebrateBirthday.call( jane );
john.celebrateBirthday.call( jane, 2 );
console.log( jane );