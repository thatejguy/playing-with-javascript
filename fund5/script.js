/*const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
  loop() {
    for (let i = 0; i <= 5; i++) {
      console.log(i);
    }
  },
};
*/
/*const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
logProperty("age");

person.age = "45";
person["name"]["last"] = "Cratchit";
*/
/*function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function() {
    console.log(`Hi I'm ${this.name}.`);
  };
  return obj;
}

createPerson('Elijah');

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

const myNotification = new Notification("Hello!");
*/

let arr = ["I", "go", "home"];
delete arr[1];
console.log(arr[1]);
console.log(arr.length);

let arr2 = ["I", "study", "JavaScript"];
arr2.splice(2, 0, "complex", "language");
console.log(arr2);

let arr3 = ["t", "e", "s", "t"];
console.log(arr3.slice(1, 3));
console.log(arr3.slice(-2));

let arr4 = [1, 2];
console.log(arr4.concat([3, 4]));
console.log(arr4.concat([3, 4], [5, 6]));
console.log(arr4.concat([3, 4], 5, 6));

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

let user = users.find(item => item.id == 1);
console.log(users.findIndex(user => user.name == 'John'));
console.log(users.findLastIndex(user => user.name == 'John'));

let users2 = [
  {id: 1, name: "John"}
]