export class Diamond {
  makeDiamond(letter) {
    const finalLetterChar = letter.charCodeAt(0);
    let currentChar = "A".charCodeAt(0);
    let spacing = -1;
    let direction = 1;

    const result = new Array();
    while(currentChar > 64) {
      let row = "";
      let margin = finalLetterChar - currentChar;
      for(let i = 0; i < margin; i++) {
        row += " ";
      }

      row += String.fromCharCode(currentChar);

      if(currentChar !== 65) {
        for(let i = 0; i < spacing; i++) {
          row += " ";
        }

        row += String.fromCharCode(currentChar);
      }

      for(let i = 0; i < margin; i++) {
        row += " ";
      }

      result.push(row);
      if(currentChar === finalLetterChar) direction = -1;
      currentChar += 1 * direction;
      spacing += 2 * direction;
    }

    return result.join("\n") + "\n";
  }
}
