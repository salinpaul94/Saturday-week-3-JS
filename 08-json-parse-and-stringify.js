const strPersons = `
[
    {
        "name": "John",
        "age": 32,
        "city": "Bangalore"
    },
    {
        "name": "Jane",
        "age": 28,
        "city": "Bangalore"
    },
    {
        "name": "Mark",
        "age": 40,
        "city": "Hydrabad"
    },
    {
        "name": "Mary",
        "age": 44,
        "city": "Hydrabad" 
    },
    {
        "name": "David",
        "age": 60,
        "city": "Delhi" 
    }
]`

const persons = JSON.parse( strPersons );
console.log( persons );
console.log ( strPersons instanceof Array ); // false
console.log ( persons instanceof Array ); // true

persons[3].city = 'Mumbai';
console.log ( persons[3] );

const strPersonsUpdated = JSON.stringify( persons );
console.log( strPersonsUpdated );