// Define functions

function add7(num) {
  return num + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(text) {
  const stringLength = text.length;

  if (stringLength > 1) {
    return text.substr(0,1).toUpperCase() + text.substr(1);
  }

  if (stringLength === 1) {
    return text.toUpperCase();
  }

  return text;
}

function lastLetter(text) {
  return text.substr(-1);
}

// Test functions

/*
console.log(`Add 7 to 10: ${add7(10)}`);
console.log(`Multiply 3 * 6: ${multiply(3, 6)}`);
console.log(`Capitalize "penguin": ${capitalize('penguin')}`);
console.log(`Capitalize "pEnGuIn": ${capitalize('pEnGuIn')}`);
console.log(`Capitalize "PENGUIN": ${capitalize('PENGUIN')}`);
console.log(`Capitalize "p": ${capitalize('p')}`);
console.log(`Last letter of "Old MacDonald": ${lastLetter('Old MacDonald')}`);
*/

// DOM manipulation practice

const p1 = document.createElement('div');

// Add red paragraph
const content = document.querySelector('div.content');

p1.innerText = 'Hey I\'m red!';
p1.style.color = 'red';

content.appendChild(p1);

// Add blue heading
const h3 = document.createElement('h3');

h3.innerText = 'I\'m a blue h3!';
h3.style.color = 'blue';

content.appendChild(h3);

// Add div with child elements

const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

div.style.cssText = 'border: 1px solid black; background-color: pink';

h1.innerHTML = 'I\'m in a div';
p2.innerHTML = 'ME TOO!';

div.appendChild(h1);
div.appendChild(p2);

content.appendChild(div);