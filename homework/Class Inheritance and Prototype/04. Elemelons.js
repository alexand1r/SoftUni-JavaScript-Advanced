function solve() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }

        get elementIndex() {}

        morph() {};

        toString() {return '';}
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._element = 'Water';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `${super.toString()}Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._element = 'Fire';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `${super.toString()}Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._element = 'Earth';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `${super.toString()}Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = weight * melonSort.length;
            this._element = 'Air';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `${super.toString()}Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = ['Fire', 'Earth', 'Air', 'Water'];
            this._element = 'Water';
            this._elementIndex = weight * melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        morph() {
            let currentElement = this.elements.shift();
            this._element = currentElement;
            this.elements.push(currentElement);
        }

        toSring() {
            return `${super.toString()}`;
        }
    }

    return {Melon: Melon,
        Watermelon: Watermelon,
        Firemelon: Firemelon,
        Earthmelon: Earthmelon,
        Airmelon: Airmelon,
        Melolemonmelon: Melolemonmelon};
}

let wm = new Watermelon(25, 'Rotten');
console.log('' + wm);
let fm = new Firemelon(15, 'Melon');
console.log('' + fm);
let em = new Earthmelon(10, 'Melon');
console.log('' + em);
let am = new Airmelon(5, 'Melon');
console.log('' + am);
let mm = new Melolemonmelon(25, 'Melon');
console.log('' + mm);
mm.morph();
mm.morph();
console.log('' + mm);
console.log(wm.melonSort);
let watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

