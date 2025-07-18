const calculator = {
  read() {
    this.a = Number(prompt('enter first num please', 0));
    if (isNaN(this.a)) {
      alert('Enter a NUMBER, please.');
      return this.read();
    }
    this.b = Number(prompt('enter second num please', 0));
    if (isNaN(this.b)) {
      alert('Enter a NUMBER, please.');
      return this.read();
    }
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


//


const user1 = { name: 'q' };

const user2 = { name: 'w' };

function logInfo() {
  console.log(this);
  console.log(this.name);
}

user1.logName = logInfo;
user2.logName = logInfo;

user1.logName();
user2.logName();


//


const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().down().up().up().showStep();


//


const back = () => {
  const take = prompt('enter a one word please');
  const arr = [];

  if (!isNaN(Number(take))) {
    alert('word please');
    return back();
  }

  for (let i = take.length - 1; i >= 0; i--) arr.push(take[i]);

  alert(arr.join(''));
};

back();


//


const foundNums = () => {
  const take = Number(prompt('enter a num please'));
  const arr = [];

  if (isNaN(take)) {
    alert('num please');
    return foundNums();
  }

  for (let i = take; i >= 0; i--) arr.push(i);

  console.log(arr.join(' '));
}

foundNums();


//


const l = 'one, two, three, four, five';

// const remakeMessage = message => {
//   message = message.split(', ');

//   for (let i = 0; i < message.length; i++) {
//     message[i] = `${message[i]}#`;
//   }

//   return message.join(', ');
// }

const remakeMessage = message => message.split(', ').map(el => el + '#').join(', ');

console.log(remakeMessage(l));


//


const getLocation = (coordinates, commands) => {
  // const newCoordinates = Object.assign([], coordinates);
  const newCoordinates = [...coordinates];

  if (newCoordinates.length !== 2) {
    return 'need x and y coord (2)';
  }

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] !== 'forward' && commands[i] !== 'back' && commands[i] !== 'right' && commands[i] !== 'left') {
      return 'you need to use a "forward" or "back" or "right" or "left" in commands';
    }
  }

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'forward') newCoordinates[1]++;
    if (commands[i] === 'back') newCoordinates[1]--;
    if (commands[i] === 'right') newCoordinates[0]++;
    if (commands[i] === 'left') newCoordinates[0]--;
  }

  return newCoordinates;
};

console.log(getLocation([2, 3], ['back', 'back', 'back', 'right']));


//


const users = [
  {
    name: 'Lal',
    age: 40,
  },
  {
    name: 'La',
    age: 30,
  },
  {
    name: 'Lada',
    age: 100,
  },
  {
    name: 'Lada',
    age: 100,
  },
];

// const avgAgeLada = array => {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].name === 'Lada') {
//       sum += array[i].age;
//       count++;
//     }
//   }

//   return sum / count;
// };

const avgAgeLada = array => array.filter(el => el.name === 'Lada').reduce((sum, el) => sum + el.age, 0) / array.filter(el => el.name === 'Lada').length;

console.log(avgAgeLada(users));


//


const user = {
  name: 'weer',
  age: 50,
  city: 'qcity',
};

const userEntries = Object.entries(user);

const userEntriesFormatted = userEntries.map(el => [`##${el[0]}##`, `##${el[1]}##`]);

console.log(userEntriesFormatted);

const userFromEntries = Object.fromEntries(userEntriesFormatted);

console.log(userFromEntries);


//


class Person {
  static planet = 'Earth';
  country = 'USA';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logName() {
    console.log(this.name);
  }
}

const firstPersonExample = new Person('georg', 40);

console.log(firstPersonExample);

class Developer extends Person {
  logAge() {
    console.log(this.age);
  }
}

const firstDeveloperExample = new Developer('hloe', 35);

console.log(firstDeveloperExample);

class JavaScriptDeveloper extends Developer {
  country = 'germany';

  constructor(name, age, experience) {
    super(name, age);
    this.experience = experience;
  }

  logExperience() {
    console.log(this.experience);
  }
}

const firstJavaScriptDeveloper = new JavaScriptDeveloper('john', 45, 5);

console.log(firstJavaScriptDeveloper);

firstJavaScriptDeveloper.logName();
firstJavaScriptDeveloper.logAge();
firstJavaScriptDeveloper.logExperience();


//


const logMessage = (userName, userAge) => alert(`hello my name is ${userName} im ${userAge}`);

const timerId = setTimeout(logMessage, 2000, 'george', 40);

// clearTimeout(timerId);


//


const intervalId = setInterval(() => console.log('hello'), 1000);

setTimeout(() => clearInterval(intervalId), 5000);


//


const startCounter = () => {
  const numFrom = Number(prompt('enter start number'));
  const numTo = Number(prompt('enter end number'));
  const msInterval = Number(prompt('enter interval in ms'));

  if (isNaN(numFrom) || isNaN(numTo) || isNaN(msInterval)) {
    alert('only numbers please');
    return startCounter();
  }

  if (numFrom >= numTo) return startCounter();

  let num = numFrom;

  const intervalId = setInterval(() => {
    console.log(num);
    num++;

    if (num > numTo) clearInterval(intervalId);
  }, msInterval);
};

startCounter();


//


const giveCandy = (callback, something) => callback(something);

giveCandy(result => console.log(result), 0);


//


// const transformObject = obj => {
//   const objEntries = Object.entries(obj);
//   const objEntriesEdited = objEntries.map((el) => [el[0].toUpperCase(), el[1]]);
//   return Object.fromEntries(objEntriesEdited);
// };

// console.log(transformObject({ name: 'john', age: 30 }));

const transformObject = obj => Object.fromEntries(Object.entries(obj).map((el) => [el[0].toUpperCase(), el[1]]));

console.log(transformObject({ name: 'george', age: 30 }));
