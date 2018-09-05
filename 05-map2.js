var numbers = [1, 2, 3, 4, 5]
var evenArray = [];
var oddArray = [];

function parseArray() {
	numbers.map(n => {
		if (n % 2 === 0) {
			evenArray.push(n)
		} else {
			oddArray.push(n)
		}
	})
}

console.log("even: ", evenArray)
console.log("odd: ", oddArray)

parseArray()