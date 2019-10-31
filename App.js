exports.add = (...nums) => {
	let total = 0;

	nums.forEach(num => {
		total += num;
	});

	return total;
}

exports.multiply = (...nums) => {
	let total = 1;

	nums.forEach(num => {
		total *= num;
	});

	return total;
}