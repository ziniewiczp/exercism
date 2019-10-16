export class Allergies {
  constructor(score) {
    const allAllergens = [
      "eggs",
      "peanuts",
      "shellfish",
      "strawberries",
      "tomatoes",
      "chocolate",
      "pollen",
      "cats"
    ];

    this.allergens = allAllergens.filter((_, index) => 1 << index & score);
  }

  list() {
    return this.allergens;
  }

  allergicTo(allergen) {
    return this.allergens.includes(allergen);
  }
}
