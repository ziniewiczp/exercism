export class PhoneNumber {
  constructor(input) {
    let formattedNumber = input.split("").filter(current => { 
      return current.match(/[0-9]/);
    }).join("");

    if(formattedNumber[0] === "1") formattedNumber = formattedNumber.substr(1);

    if(formattedNumber.length === 10 
        && formattedNumber[0] !== "1" 
        && formattedNumber[0] !== "0" 
        && formattedNumber[3] !== "1" 
        && formattedNumber[3] !== "0") {
      this.formattedNumber = formattedNumber;
    
    }
  }

  number() {
    return this.formattedNumber || null;
  }
}
