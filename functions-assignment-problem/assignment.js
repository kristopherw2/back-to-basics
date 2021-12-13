const sayHello = (name, phrase = 'Default value') => {
  console.log(`${phrase} ${name}`);
}

const sayHello2 = () => {
	console.log('Hi Kris');
};

const sayHello3 = name => 'Hi ' + name

const checkInput = (cb, ...args) => {
  let hasEmptyText = false;

  for(const text of args) {
    if(!text) {
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText) {
    cb()
  }
}

sayHello('Kris');
sayHello2();
console.log(sayHello3('Kris'))
checkInput(() => {
  console.log('All not empty')

}, 'Hello', '')

