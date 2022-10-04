// iterator methods
// they iterate through the items of the array
// they have similar set of arguments
// forEach, filter, find, map

const persons = [
    { name: 'John', age: 32, city: 'Bangalore'},
    { name: 'Jane', age: 28, city: 'Bangalore'},
    { name: 'Mark', age: 40, city: 'Hydrabad'},
    { name: 'Mary', age: 44, city: 'Hydrabad'},
    { name: 'David', age: 60, city: 'Delhi'}
];

// we want an array of names of persons
// [ 'John', 'Jane', 'Mark', 'Mary', 'David' ]
// map()

const personNames = persons.map(
    function( item ) {
        // console.log( item );
        // console.log( item.name );
        return item.name;
    }
)

console.log( personNames );

// get an array of all persons living in 'Hydrabad'
/**
 * [
    { name: 'Mark', age: 40, city: 'Hydrabad'},
    { name: 'Mary', age: 44, city: 'Hydrabad'},
] ->
[ 'Mark, 'Mary' ]
 */

// const personFromHydrabad = persons.filter(
//     function( item ) {
//         return item.city === 'Hydrabad'
//     }
// ).map( 
//     function( item ) {
//         return item.name;
//     }
// );

// same as above
const personFromHydrabad = persons.filter(
                                        item => item.city === 'Hydrabad'
                                    ).map( 
                                        item => item.name
                                    );

// console.clear();
console.log( personFromHydrabad );
