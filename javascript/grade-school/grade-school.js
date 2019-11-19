export class GradeSchool {
  constructor() {
    this.rosterObj = {};
  }

  roster() {
    return JSON.parse(JSON.stringify(this.rosterObj));
  }

  add(name, grade) {
    if (!this.rosterObj[grade]) { this.rosterObj[grade] = new Array(); }
    
    this.rosterObj[grade].push(name);
    this.rosterObj[grade].sort();
  }

  grade(which) {
    return (this.rosterObj[which]) ? [...this.rosterObj[which]] : new Array();
  }
}
