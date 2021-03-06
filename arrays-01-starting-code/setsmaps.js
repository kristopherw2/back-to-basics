// const ids = new Set(["Hi", "From", "Set"]);
// ids.add(2);

// if (ids.has("Hi")) {
// 	ids.delete("Hi");
// }

// for (const entry of ids.entries()) {
// 	console.log(entry[0]);
// }

// const person1 = { name: "Kris" };

// const person2 = { name: "Manuel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ date: "2 weeks ago", price: 100 }]);
// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value]of personData.entries()) {
// 	console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key)
// }

// for (const value of personData.values()) {
// 	console.log(value);
// }

// console.log(personData.size)

let person = { name: "Kris" };
const persons = new WeakSet();

persons.add(person);

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra Info!');

person = null;

console.log(personData);