class ArgumentError extends Error {
  constructor(message, ...args) {
    super(message, ...args);
    this.name = "ArgumentError";
  }
}

class Wordy {
  constructor(question) {
    const temp = question
      .replace("What is ", "")
      .replace(/plus/g, "+")
      .replace(/minus/g, "-")
      .replace(/multiplied by/g, "*")
      .replace(/divided by/g, "/")
      .replace("?", "")
      .split(" ");

    if(temp.length > 3) {
      temp.splice(0, 0, "(");
      temp.splice(4, 0, ")");
    }

    this.expression = temp.join(" ");
  }

  answer() {
    try {
      return eval(this.expression);
    
    } catch(e) {
      throw new ArgumentError(e.message);
    }
  }
}

export { Wordy as WordProblem, ArgumentError };
