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
const person = {
  name: ["Bob", "Smith"],
  age: 32,
};

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
logProperty("age");