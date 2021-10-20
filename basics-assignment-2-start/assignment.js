const task3Element = document.getElementById('task-3');

function simpleFunc() {
  alert('This is simple.');
}

function nameFunc(userName) {
  alert(userName);
}
function stringFunc(string1, string2, string3){
  alert(string1 + string2 + string3)
}
task3Element,addEventListener('click', simpleFunc);

nameFunc("Kris");
stringFunc('Zoe', 'Kris', 'Evan')
