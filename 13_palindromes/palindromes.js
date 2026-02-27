const palindromes = function (word) {
	return (
		word
			.replace(/[^a-zA-Z0-9]/g, '')
			.split('')
			.reverse()
			.join('')
			.toLowerCase() == word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
	);
};

// Do not edit below this line
module.exports = palindromes;
