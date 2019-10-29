export class PhoneNumber {
  constructor(input) {
    let digits = input.replace(/[^0-9]/g, "");
    if(digits[0] === "1")
      digits = digits.substr(1);
      
    if(digits.length === 10 && digits[0] > 1 && digits[3] > 1)
      this.phoneNumber = digits;
  }

  number() {
    return this.phoneNumber || null;
  }
}
