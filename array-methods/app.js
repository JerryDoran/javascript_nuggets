const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'sue', age: 30, position: 'manager' },
  { name: 'natasha', age: 35, position: 'intern' },
  { name: 'steve', age: 100, position: 'developer' },
];

// Filter people less than or equal to 25
const youngPeople = people.filter((person) => person.age <= 25);
console.log(youngPeople);

// Filter for just developers
const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

// If we have no matches we will get an empty array
const seniorDevs = people.filter((person) => person.position === 'senior dev');
console.log(seniorDevs);

// find - will return only a single first match instance
const peter = people.find((person) => person.name === 'peter');
console.log(peter);

// if we have no matches with find we will get undefined back
const tony = people.find((person) => person.name === 'tony');
console.log(tony);
