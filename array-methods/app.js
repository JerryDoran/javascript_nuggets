const people = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'sue', age: 30, position: 'manager', salary: 400 },
  { name: 'natasha', age: 35, position: 'intern', salary: 50 },
  { name: 'steve', age: 100, position: 'developer', salary: 600 },
];

// ****************************** Filter Method **********************************

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

// ****************************** Reduce Method **********************************

const dailyTotal = people.reduce((total, person) => {
  total += person.salary;
  return total;
}, 0);

console.log(dailyTotal);

// cart example
const cart = [
  {
    title: 'Samsung galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'Google Pixel',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Iphone 11',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiami Redmi Note 2',
    price: 599.99,
    amount: 3,
  },
];

// this will return an object as the second parameter to the reduce method.
let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // get value of cart (sum amount of each item * price)
    total.cartTotal += amount * price;

    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log(total);
console.log(totalItems, cartTotal);

// github repos example
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () => {
  const res = await fetch(url);
  const repos = await res.json();
  const newData = repos.reduce((total, repo) => {
    const { language } = repo;

    // set up dynamic property
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }

    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos();
