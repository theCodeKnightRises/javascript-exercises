const add = function (n1, n2) {
	return n1 + n2;
};

const subtract = function (n1, n2) {
	return n1 - n2;
};

const sum = function (arr) {
	return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (arr) {
	return arr.reduce((acc, cur) => acc * cur, 1);
};

const power = function (base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function (n) {
	if (n === 0 || n === 1) return 1;
	let f = 1;
	for (i = 1; i <= n; i++) {
		f = f * i;
	}
	return f;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
