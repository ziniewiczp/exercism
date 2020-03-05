class ArgumentError extends Error {
  constructor(message, ...args) {
    super(message, ...args);
    this.name = "ArgumentError";
  }
}

class Wordy {
  constructor(question) {
    this.expression = question
      .replace("What is ", "")
      .replace(/plus/g, "+")
      .replace(/minus/g, "-")
      .replace(/multiplied by/g, "*")
      .replace(/divided by/g, "/")
      .replace("?", "")
      .split(" ");
  }

  calculate(a, b, operator) {
    if(Number.isNaN(a) || Number.isNaN(b)) {
      throw new ArgumentError("Provided parameter is not a number!");
    }

    switch(operator) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      case "*":
        return a * b;

      case "/":
        return a / b;

      default:
        throw new ArgumentError("Wrong operator!");
    }
  }

  answer() {
    let result;
    let temp = [...this.expression];
    while(temp.length > 0) {
      let a = (result) ? result : +temp.shift();
      let operator = temp.shift();
      let b = +temp.shift();

      result = this.calculate(a, b, operator);
    }

    return result;
  }
}

export { Wordy as WordProblem, ArgumentError };
