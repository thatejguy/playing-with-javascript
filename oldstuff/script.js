const container = document.querySelector('#container');

const content = document.createElement('div');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p2 = document.createElement('p');

content.classList.add('content');
p.classList.add('p');
h3.classList.add('h3');
div.classList.add('div');
h1.classList.add('h1');
p2.classList.add('p2');

content.textContent = 'This is the men';
p.textContent = "I'm a red paragraph!";
h3.textContent = "I'm a blue h3!";
h1.textContent = "I'm in a div!";
p2.textContent = "Me too!";

p.setAttribute('style', 'color: red;');
h3.setAttribute('style', 'color: blue;');
div.setAttribute('style', 'border: 5px solid black; background-color: pink');

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);