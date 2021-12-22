// const numbers = [1, 2, 3];
// console.log(numbers)

// const moreNumbers = new Array(5)

// const yetMoreNumbers = Array.of(1, 2)

// console.log(yetMoreNumbers)

// const listItems = document.querySelectorAll('li')

// const moreNumbers = Array.from(listItems)
// console.log(moreNumbers[0]);

// const hobbies = ['Cooking', 'Sports']
// const personalData = [30, 'Kris', {moreDetail : []}]

// const analytics = [[1,1.6], [4, 5], [3.5, 1.55]]

// for (const data of analytics) {
//   for (const dataPoints of data) {
//     console.log(dataPoints)
//   }
// }

// console.log(personalData[1])

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");
// hobbies.unshift("Coding");
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);
// hobbies[1] = "Coding";
// hobbies[5] = "Reading";
// hobbies.splice(1, 0, "Good Food");
// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 4, 5.2, 5.6, 5.2, -3, 10];
// const storedResults = testResults.slice(2)

// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.lastIndexOf(5.2));

// console.log(testResults.includes(5))

// const personalData = [{ name: "Kris" }, { name: "Max" }];
// console.log(personalData.indexOf({ name: "Kris" }));

// const max = personalData.find((person, index, persons) => {
// 	return person.name === "Max";
// });

// max.name = 'Anna'

// console.log(max, personalData);

// const maxIndex = personalData.findIndex((person, index, persons) => {
// 	return person.name === "Max";
// });

// console.log(maxIndex);

// const prices = [10.99, 5.56, 3.99, 4.99];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((currValue, index, prices) => {
// 	const currValueObj = { index: index, taxAdjPrice: currValue + 1 * tax };
// 	taxAdjustedPrices.push(currValueObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.56, 3.99, 4.99];
// const tax = 0.19;

// const taxAdjustedPrice = prices.map((currValue, index, prices) => {
// 	const currValueObj = {
// 		index: index,
// 		taxAdjPrice: currValue + 1 * tax,
// 	};

// 	return currValueObj;
// });

// console.log(taxAdjustedPrice, prices);

// const sortedPrices = prices.sort((a, b) => {
// 	if (a > b) {
// 		return 1;
// 	} else if (a === b) {
// 		return 0;
// 	} else {
// 		return -1;
// 	}
// });

// console.log(sortedPrices);

// const filteredArray = prices.filter(p => p > 6);

// console.log(filteredArray);

// let sum = 0

// prices.forEach(price => sum += price)

// console.log(sum)

// const sum = prices.reduce((preValue, currValue) => preValue + currValue, 0);

// console.log(sum);

// const data = "new york;10.99;2000";

// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ["Kris", "Williams"];
// const name = nameFragments.join(" ");
// console.log(name);

// const copiedName = [...nameFragments];
// nameFragments.push("Mr");
// console.log(copiedName, nameFragments);

// console.log(Math.min(...prices));

// const persons = [
// 	{ name: "Max", age: 30 },
// 	{ name: "Kris", age: 37 },
// ];

// const copiedPersons = [
// 	...persons.map((person) => ({ name: person.name, age: person.age })),
// ];
// persons.push({ name: "Anna", age: 32 });
// persons[0].age = 4;
// console.log(persons, copiedPersons);

// const nameData = ['Kris', 'Williams', 'Mr', 30];

// const firstName = nameData[0];
// const lastName = nameData[1];

// const [firstName, lastName, ...otherInformation] = nameData;

// console.log(firstName, lastName, otherInformation);