// const numbers = [1, 2, 3];
// console.log(numbers)

// //const moreNumbers = new Array(5)

// // const yetMoreNumbers = Array.of(1, 2)

// // console.log(yetMoreNumbers)

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

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading");
hobbies.unshift("Coding");
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);
hobbies[1] = "Coding";
hobbies[5] = "Reading";
hobbies.splice(1, 0, "Good Food");
const removedElements = hobbies.splice(-1, 2);
console.log(hobbies);
