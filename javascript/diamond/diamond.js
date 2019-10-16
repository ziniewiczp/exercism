export class Diamond {
  makeDiamond(letter) {
    const result = new Array();
    const asciiValue = letter.charCodeAt(0);
    const difference = asciiValue - "A".charCodeAt(0);
    let currentLetter = "A".charCodeAt(0);
    let currentMargin = difference;
    let currentSpacing = -1;

    if(difference === 0) return "A\n";

    while(currentLetter < asciiValue) {
      let row = "";
      for(let i = 0; i < currentMargin; i++) {
        row += " ";
      }

      row += String.fromCharCode(currentLetter);

      if(currentLetter > "A".charCodeAt(0)) {
        for(let i = 0; i < currentSpacing; i++) {
          row += " ";
        }

        row += String.fromCharCode(currentLetter);
      }

      for(let i = 0; i < currentMargin; i++) {
        row += " ";
      }

      result.push(row);
      currentLetter += 1;
      currentMargin -= 1;
      currentSpacing += 2;
    }
    
    while(currentLetter >= "A".charCodeAt(0)) {
      let row = "";
      for(let i = 0; i < currentMargin; i++) {
        row += " ";
      }

      row += String.fromCharCode(currentLetter);

      if(currentLetter > "A".charCodeAt(0)) {
        for(let i = 0; i < currentSpacing; i++) {
          row += " ";
        }

        row += String.fromCharCode(currentLetter);
      }

      for(let i = 0; i < currentMargin; i++) {
        row += " ";
      }

      result.push(row);
      currentLetter -= 1;
      currentMargin += 1;
      currentSpacing -= 2;
    }

    return result.join("\n") + "\n";
  }
}
