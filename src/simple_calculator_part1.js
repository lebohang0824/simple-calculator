let add = (...nums) => {
	let sum = 0;

		nums.forEach(num => {
		sum += num;
	});

	return sum;
}

let multiply = (...nums) => {
	let product = 1;

	nums.forEach(num => {
		product *= num;
	});

	return product;
}

module.exports = { add, multiply }
