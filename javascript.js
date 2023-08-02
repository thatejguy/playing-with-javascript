const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious grease';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red!";
para.style.color = 'red';

container.appendChild(para);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

const div = document.createElement('div');
div.classList.add('div');
div.setAttribute('style', 'border: black;  background-color: pink;')

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm in a div!";

const para2 = document.createElement('p');
para2.classList.add('para2');
para2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(para2);
container.appendChild(div);