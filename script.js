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

const avgAgeLada = array => array.filter(el => el.name === 'Lada').reduce((sum, el) => sum += el.age, 0) / array.filter(el => el.name === 'Lada').length;

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
