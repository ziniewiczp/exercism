export class Diamond {
  makeDiamond(letter) {
    if(letter === "A") return "A\n";

    const height = letter.charCodeAt(0) - "A".charCodeAt(0);
    const topPart = new Array(height).fill().map((_, index) => {
      let row = " ".repeat(height - index)
        + String.fromCharCode(index + 65);

      if(index > 0) {
        row += " ".repeat(2*index - 1) 
        + String.fromCharCode(index + 65);
      }

      return row + " ".repeat(height - index);
    });

    const middlePart = letter 
      + " ".repeat(2*(letter.charCodeAt(0) - "A".charCodeAt(0)) - 1)
      + letter + "\n";

    return topPart.join("\n") + "\n"
      + middlePart
      + [...topPart].reverse().join("\n") + "\n";
  }
}
