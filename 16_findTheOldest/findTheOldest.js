const findTheOldest = function (arr) {
	// const people = [
	//   {
	//     name: "Carly",
	//     yearOfBirth: 1942,
	//     yearOfDeath: 1970,
	//   },
	//   {
	//     name: "Ray",
	//     yearOfBirth: 1962,
	//     yearOfDeath: 2011,
	//   },
	//   {
	//     name: "Jane",
	//     yearOfBirth: 1912,
	//     yearOfDeath: 1941,
	//   },
	// ]
	function getAge(birthYear, deathYear) {
		if (!deathYear) {
			deathYear = new Date().getFullYear();
		}
		return deathYear - birthYear;
	}

	return arr.reduce((oldest, current) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

		return oldestAge > currentAge ? oldest : current;
	});
	// return arr.reduce((oldest, current) => {
	// 	let currentDate = new Date();
	// 	let currentYear = currentDate.getFullYear();
	// 	if (!oldest.yearOfDeath) {
	// 		oldest.yearOfDeath = currentYear;
	// 	}
	// 	const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
	// 	const currentAge = current.yearOfDeath - current.yearOfBirth;
	//
	// 	return oldestAge > currentAge ? oldest : current;
	// });
};

// Do not edit below this line
module.exports = findTheOldest;
