// function are "first class citizens"
function printPerson( person, getTitle ) {
    const title = getTitle( person );
    console.log( title + ' ' + person.name + ' is ' + person.age + ' years old');
}

function getEnglishTitle( person ){
    return person.gender === 'male' ? 'Mr.' : 'Ms. ';
}
function getRespectedTitle( person ){
    return person.gender === 'male' ? 'Sir.' : 'Madam. ';
}

const john = {
    name: 'John',
    age: 32,
    gender: 'male'
};

//printPerson( john );

console.log( getEnglishTitle( john ) );

// person = john
// getTitle = getEnglishTitle // both getTitle and getEnglishTitle refer to the Same funcition in memory
printPerson( john, getEnglishTitle );
printPerson( john, getRespectedTitle );