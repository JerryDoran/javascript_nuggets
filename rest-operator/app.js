const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, ...restOfFruits] = fruits;

console.log(first, restOfFruits);

const specificFruit = restOfFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

const person = { name: 'steve', lastName: 'rogers', job: 'avenger' };

const { job, ...restOfProps } = person;
console.log(job, restOfProps);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const ave = scores.reduce(
    (total, item) => (total += item / scores.length),
    0
  );
  console.log(ave);
};

// getAverage(person.name, 89, 56, 78, 99);

const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores);
