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
