const { add, multiply } = require('../src/simple_calculator_part1.js');

describe('Calculator add function', function () {

	it('Should return 0', function () {
		expect(add(0, 0)).toBe(0);
	});

	it('Should return -2', function () {
		expect(add(-1, -1)).toBe(-2);
	});

	it('Should return 9', function () {
		expect(add(4, 5)).toBe(9);
	});

	it('Should return 10', function () {
		expect(add(1, 2, 3, 4)).toBe(10);
	});

});

describe('Calculator multiply function', function () {

	it('Should return 2', function () {
		expect(multiply(1, 2)).toBe(2);
	});

	it('Should return 24', function () {
		expect(multiply(2,2,3,4)).toBe(48);
	});

});
