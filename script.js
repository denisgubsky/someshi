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