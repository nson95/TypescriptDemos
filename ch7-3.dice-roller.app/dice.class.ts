export class Die {
    value: number;

    constructor() {
        this.value = 0;
    }


    rollDie(die: Die) {
        die.value = Math.floor(Math.random() * 6) + 1;
    }
}
