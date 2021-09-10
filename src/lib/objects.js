const createPerson = (name, age) => {
  return {name: name, age: age};
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  return people.map(people => people.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(cars => cars.manufacturer === "Honda")
};

const averageAge = people => {
  let initialValue = 0;
  let sum = people.reduce((totalAge, person) => totalAge + person.age, initialValue);
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  this.name = name;
  this.age = age;
  this.introduce = function(friend) {
    return "Hi " + friend + ", my name is " + this.name + " and I am " + this.age + "!";
  }
    return this;
  }

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
