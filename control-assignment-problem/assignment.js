const randomNumber = Math.random();
const secondRandomNumber = Math.random();

if(randomNumber > 0.7 && secondRandomNumber > 0.7) {
  alert('This is greater than 0.7')
} else if(randomNumber < 0.2 || secondRandomNumber < 0.2){
  alert('One of the randoms is below 0.2')
}

console.log(randomNumber, secondRandomNumber)

let arrNum = [1, 2, 3, 4];

for (let i = arrNum.length - 1; i >= 0; i--) {
  console.log(arrNum[i])
}

for(const el of arrNum){
  console.log(el)
}