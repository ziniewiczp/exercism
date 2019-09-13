export const abilityModifier = score => {
    if(isNaN(score)) throw new Error(`${score} is not a number!`);
    if(score < 3) throw new Error("Ability scores must be at least 3");
    if(score > 18) throw new Error("Ability scores can be at most 18");

    return Math.floor((score - 10) / 2);
};

export class Character {
    static rollAbility() {
        return Math.floor(Math.random() * 15 + 3);
    }

    constructor() {
        const abilities = [
            "strength",
            "dexterity",
            "constitution",
            "intelligence",
            "wisdom",
            "charisma"
        ];

        for(let ability of abilities) {
            this[ability] = Character.rollAbility();
        }

        this.hitpoints = 10 + abilityModifier(this.constitution);
    }
}