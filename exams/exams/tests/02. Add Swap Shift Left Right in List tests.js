function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;

describe("List functions", function() {
    let list = {};

    beforeEach(function() {
       list = createList();
    });

    it("should have add functions", function() {
        expect(list.hasOwnProperty('add')).to.equal(true);
        expect(typeof list.add).to.equal('function');
    });
    it("should have shiftLeft functions", function() {
        expect(list.hasOwnProperty('shiftLeft')).to.equal(true);
        expect(typeof list.shiftLeft).to.equal('function');
    });
    it("should have shiftRight functions", function() {
        expect(list.hasOwnProperty('shiftRight')).to.equal(true);
        expect(typeof list.shiftRight).to.equal('function');
    });
    it("should have swap functions", function() {
        expect(list.hasOwnProperty('swap')).to.equal(true);
        expect(typeof list.swap).to.equal('function');
    });
    it("should have toString functions", function() {
        expect(list.hasOwnProperty('toString')).to.equal(true);
        expect(typeof list.toString).to.equal('function');
    });
    it("should return '' on init()", function() {
        expect(list.toString()).to.equal('');
    });


    it("should return '5' on add(5)", function() {
        list.add(5);
        expect(list.toString()).to.equal('5');
    })
    it("should return '5, 6' on add(5);add(6)", function() {
        list.add(5);
        list.add(6);
        expect(list.toString()).to.equal('5, 6');
    })
    it('should add elements of any type on add(item)', () => {
        list.add(5);
        list.add("six");
        list.add(false);
        expect(list.toString()).to.equal('5, six, false');
    });

    it("should return '5, 6, 7' on shiftLeft([7, 5, 6])", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        list.shiftLeft();
        expect(list.toString()).to.equal('5, 6, 7');
    })
    it("should return '' on shiftLeft()", function() {
        list.shiftLeft();
        expect(list.toString()).to.equal('');
    })
    it("should return '5' on shiftLeft()", function() {
        list.add(5);
        list.shiftLeft();
        expect(list.toString()).to.equal('5');
    })
    it("should return '6, 5' on shiftLeft()", function() {
        list.add(5);
        list.add(6);
        list.shiftLeft();
        expect(list.toString()).to.equal('6, 5');
    })
    it("should return '6, 7, 5' on shiftRight([7, 5, 6])", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        list.shiftRight();
        expect(list.toString()).to.equal('6, 7, 5');
    })
    it("should return '' on shiftRight()", function() {
        list.shiftRight();
        expect(list.toString()).to.equal('');
    })
    it("should return '5' on shiftRight()", function() {
        list.add(5);
        list.shiftRight();
        expect(list.toString()).to.equal('5');
    })
    it("should return '6, 5' on shiftRight()", function() {
        list.add(5);
        list.add(6);
        list.shiftRight();
        expect(list.toString()).to.equal('6, 5');
    })

    it("should return '7, 6, 5' on swap(1, 2)", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(1, 2)).to.equal(true);
        expect(list.toString()).to.equal('7, 6, 5');
    })
    it("should return 'false' on swap('0', 1)", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap("0", 1)).to.equal(false);
        list.swap("0", 1);
        expect(list.toString()).to.equal('7, 5, 6');
    })
    it("should return 'false' on swap(0, '1')", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(0, "1")).to.equal(false);
        list.swap(0, "1");
        expect(list.toString()).to.equal('7, 5, 6');
    })
    it("should return false on swap with incorrect indexes", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(-1, 2)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
    })
    it("should return false on swap with incorrect indexes", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(1, -2)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
    })
    it("should return false on swap with indexes out of bounds", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(3, 2)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
        expect(list.swap(4, 2)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
    })
    it("should return false on swap with indexes out of bounds", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(2, 3)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
        expect(list.swap(2, 4)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
    })
    it("should return false on swap with equal indexes", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(3, 3)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
    })
    it("should return false on swap with equal indexes", function() {
        list.add(7);
        list.add(5);
        list.add(6);
        expect(list.swap(1, 1)).to.equal(false);
        expect(list.toString()).to.equal('7, 5, 6');
    })

    it('should work correctly on this complex test', () => {
        let items = ['asd', 1, 15, 888, 14, {name: 'pesho'}, false, true, NaN, -0];
        for (let item of items) {
            list.add(item);
        }

        expect(list.toString()).to.equal('asd, 1, 15, 888, 14, [object Object], false, true, NaN, 0');
        list.shiftLeft();
        expect(list.toString()).to.equal('1, 15, 888, 14, [object Object], false, true, NaN, 0, asd');
        list.shiftRight();
        expect(list.toString()).to.equal('asd, 1, 15, 888, 14, [object Object], false, true, NaN, 0');
        list.shiftLeft();
        expect(list.toString()).to.equal('1, 15, 888, 14, [object Object], false, true, NaN, 0, asd');
        list.swap(4, 7);
        expect(list.toString()).to.equal('1, 15, 888, 14, NaN, false, true, [object Object], 0, asd');
        expect(list.swap(0, 9)).to.equal(true);
        expect(list.toString()).to.equal('asd, 15, 888, 14, NaN, false, true, [object Object], 0, 1');
        expect(list.swap("asd", "asd")).to.equal(false);
        expect(list.toString()).to.equal('asd, 15, 888, 14, NaN, false, true, [object Object], 0, 1');
        expect(list.swap("add", 4)).to.equal(false);
        expect(list.toString()).to.equal('asd, 15, 888, 14, NaN, false, true, [object Object], 0, 1');
        expect(list.swap(NaN, 4)).to.equal(false);
        expect(list.toString()).to.equal('asd, 15, 888, 14, NaN, false, true, [object Object], 0, 1');
        expect(list.swap(false, 4)).to.equal(false);
        expect(list.toString()).to.equal('asd, 15, 888, 14, NaN, false, true, [object Object], 0, 1');
        expect(list.swap(-4.5, 4)).to.equal(false);
        expect(list.toString()).to.equal('asd, 15, 888, 14, NaN, false, true, [object Object], 0, 1');
        expect(list.swap(4.5, 4)).to.equal(false);
        expect(list.toString()).to.equal('asd, 15, 888, 14, NaN, false, true, [object Object], 0, 1');
        expect(list.swap(9, 0)).to.equal(true);
        expect(list.toString()).to.equal('1, 15, 888, 14, NaN, false, true, [object Object], 0, asd');
    });
});
