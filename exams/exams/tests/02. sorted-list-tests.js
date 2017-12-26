let sortedList = require('../02.sorted-list.js').SortedList;
let expect = require('chai').expect;

describe("SortedList", function() {
    let myList = {};
    beforeEach(function() {
        myList = new sortedList();
    });

    it('should have a constructor', () => {
        expect(typeof sortedList).to.equal('function');

        expect(sortedList.prototype.hasOwnProperty('add')).to.equal(true, 'Didn\'t find add function')
        expect(sortedList.prototype.hasOwnProperty('remove')).to.equal(true, 'Didn\'t find add function')
        expect(sortedList.prototype.hasOwnProperty('get')).to.equal(true, 'Didn\'t find add function')
        expect(sortedList.prototype.hasOwnProperty('size')).to.equal(true, 'Didn\'t find add function')
    });

    it('should have size property', function() {
       expect(myList.size).to.equal(0);
    });

    it('should have working add', function() {
        myList.add(5);
        expect(myList.size).to.equal(1);
    });

    it('should have working add and get', function() {
        myList.add(4);
        expect(myList.get(0)).to.equal(4);
    });

    it('it should hold numbers only', () => {
        myList.add(5);
        myList.add(50);
        myList.add(500);
        expect(!myList.some(isNaN)).to.be.equal(true);
    })

    it('should be sorted right and have the right size', function() {
        myList.add(4);
        myList.add(5);
        myList.add(10);
        myList.add(7);
        expect(myList.get(0)).to.equal(4);
        expect(myList.get(1)).to.equal(5);
        expect(myList.get(2)).to.equal(7);
        expect(myList.get(3)).to.equal(10);
        expect(myList.size).to.equal(4);
    });

    it('should be sorted right and have the right size after removing', function() {
        myList.add(4);
        myList.add(5);
        myList.add(10);
        myList.add(7);
        myList.remove(1);
        expect(myList.get(0)).to.equal(4);
        expect(myList.get(1)).to.equal(7);
        expect(myList.get(2)).to.equal(10);
        expect(myList.size).to.equal(3);
    });

    it('should not work with negative index', function() {
        myList.add(4);
        myList.add(5);
        myList.add(10);
        myList.add(7);
        expect(() => myList.get(-1)).to.throw(Error);
        expect(() => myList.remove(-1)).to.throw(Error);
    });

    it('should not work with outside of bounds index', function() {
        myList.add(4);
        myList.add(5);
        myList.add(10);
        myList.add(7);
        expect(() => myList.get(4)).to.throw(Error);
        expect(() => myList.remove(4)).to.throw(Error);
    });


    it('should not work with empty collection', function() {
        expect(() => myList.get(0)).to.throw(Error);
        expect(() => myList.remove(0)).to.throw(Error);
    });
});