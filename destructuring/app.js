const person = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// const firstName = person.first;
// const lastName = person.last;
// const sister = person.siblings.sister;

// console.log(firstName, lastName, sister);

const {
  first,
  last: lastname,
  city,
  siblings: { sister: favoriteSibling },
} = person;
console.log(first, lastname, city, favoriteSibling);

// function printPerson(person) {
//   console.log(person.first);
// }

// printPerson(person)

function printPerson({ first, last, city, siblings: { sister } }) {
  // const { first, last, city } = person;
  console.log(first, last, city, sister);
}

printPerson(person);
