// Array filtering and mapping
const PEOPLE = [
  { name: 'John', age: 30, gender: 'male' },
  { name: 'Jane', age: 25, gender: 'female' },
  { name: 'Mike', age: 40, gender: 'male' },
  { name: 'Emily', age: 35, gender: 'female' },
];

function getMaleNames(people: typeof PEOPLE) {
  return people
    .filter((person) => person.gender === 'male')
    .map((person) => person.name);
}

console.log(getMaleNames(PEOPLE));

function getFemaleNames(people: typeof PEOPLE) {
  return people
    .filter((person) => person.gender === 'female')
    .map((person) => person.name);
}

console.log(getFemaleNames(PEOPLE));

// Object manipulation
const BOOKS = [
  { title: 'Book One', author: 'Author One', year: 2001 },
  { title: 'Book Two', author: 'Author Two', year: 2002 },
  { title: 'Book Three', author: 'Author Three', year: 2003 },
];

function getBookTitles(books: typeof BOOKS) {
  return books.map((book) => book.title);
}

console.log(getBookTitles(BOOKS));

// Sorting objects
const CARS = [
  { make: 'Toyota', model: 'Corolla', year: 2020 },
  { make: 'Honda', model: 'Civic', year: 2018 },
  { make: 'Ford', model: 'Mustang', year: 2019 },
];

function sortCarsByYear(cars: typeof CARS) {
  return cars.sort((a, b) => a.year - b.year);
}

console.log(sortCarsByYear(CARS));

// Array reduction
function getTotal(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0);
}

console.log(getTotal([1, 2, 3, 4]));

// Functional programming - reduce
const ITEMS = Array.from({ length: 6 }).map(() => ({
  quantity: Math.round(Math.random() * 60),
  price: Math.random() * 4000,
}));

function calculateTotal(arr: typeof ITEMS) {
  return arr.reduce((a, b) => a + b.quantity, 0);
}

console.log(calculateTotal(ITEMS));
