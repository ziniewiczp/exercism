export class Triangle {
  constructor(height) {
    this.rows = new Array();

    for(let i = 0; i < height; i++) {
      let row = new Array();
      for(let j = 0; j < i + 1; j++) {
        row.push((j !== 0 && j !== i) ? this.rows[i-1][j-1] + this.rows[i-1][j] : 1);
      }

      this.rows.push(row);
    }
  }

  get lastRow() {
    return this.rows[this.rows.length - 1];
  }
}
