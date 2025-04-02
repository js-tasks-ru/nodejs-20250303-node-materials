const users = [
  { name: 'John', age: 20 },
  { name: 'Maria', age: 40 },
  { name: 'Ivan', age: 30 },
];

const userByName = {
  John: users[0],
  Maria: users[1],
  Ivan: users[2],
};

function findByName(name) {
  // return users.find((u) => u.name === name);
  return userByName[name];
}

findByName('Ivan'); // Ivan
findByName('Azat'); // undefined
