const udemy = 'udemy';
const lettersInUdemy = [...udemy];
console.log(lettersInUdemy);

const boys = ['steve', 'tony', 'scott'];
const girls = ['natasha', 'wanda'];
const bestFriend = 'hank';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

const person = { name: 'john', job: 'developer' };
const newPerson = {...person, city:'New York', name: 'arnold'}
console.log(newPerson);
console.log(person);
