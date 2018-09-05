//=====================================
// var arr = [1, 2, 3]
// console.log(arr.length);
// console.log(arr);


// var arr = [1, 2, 3]
// arr[5] = 100;

// console.log(arr);
// console.log(arr.length);

//=====================================

// var arr = [1, 2, 3]
// arr.forEach(element => {
// 	console.log(element * 2)
// });

// var times2 = arr.map(element => {
// 	return element * 2
// });

// var times3 = arr.map(element => {
// 	return element * 3
// });

// var times4 = arr.map(element => {
// 	return element * 4
// });
// console.log(arr);
// console.log(times2);
// console.log(times3);
// console.log(times4);


// ============ forEach ========================
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// console.log(alpha);
// var timesMany = (num) => {
// 	let grouping = []
// 	for (let i = 0; i < num; i++) {
// 		let subgroup = []
// 		arr.map(el => {
// 			subgroup.push((el + i) * num + alpha[i] + alpha[i + 1] + [i])
// 		})
// 		grouping.push(subgroup)
// 	}
// 	return grouping
// }

// var group1 = timesMany(1)
// var group2 = timesMany(2)
// var group3 = timesMany(3)

// console.log(group1);
// console.log(group2);
// console.log(group3);

// ============ push ========================

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// function resetarr() {
// 	arr = [1, 2, 3, 4, 5, 6, 7, 8]
// }

// arr.push(4);
// console.log('arr starts out as: ', arr);

// ============ pop ========================
// console.log('returning the POPped (last one is removed) element: ', arr.pop());
// console.log('and arr is now: ', arr);
// resetarr();
// console.log('reset arr is now: ', arr);

// ============ slice ========================
// console.log('returning the SLICED arr: ', arr.slice());
// console.log('and arr is now: ', arr);
// resetarr();
// console.log('reset arr is now: ', arr);

// ============ splice ========================
// console.log('returning the SPLICEd arr: ', arr.splice(0, 2));
// console.log('and arr is now: ', arr);
// resetarr();
// console.log('reset arr is now: ', arr);

// ============ shift ========================
// console.log('returning the SHIFTed (first one is removed) element: ', arr.shift());
// console.log('and arr is now: ', arr);
// resetarr();
// console.log('reset arr is now: ', arr);

// ============ shift ========================
// console.log('returning the UNSHIFTed (first one is removed) element: ', arr.unshift('Bird'));
// console.log('and arr is now: ', arr);


// ============ indexOf ========================
// getBird = () => {
// 	return arr.indexOf('Bird')
// }

// function getBird() {
// 	return arr[arr.indexOf('Bird')]
// }
// console.log('getBird index: ', getBird());
// console.log(arr[getBird()]);
//----------------------------------------------
// The indexOf() method returns the first 
// index at which a given element can be found 
// in the arr, or - 1 if it is not present.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/indexOf
//----------------------------------------------

// ============ findIndex ========================

// function findBird(element) {
// 	return element === 'Bird'
// }

// arr.push('0')
// console.log('arr: ', arr)
// console.log('findIndex of Bird: ', arr.findIndex(findBird));
// console.log('arr is now: ', arr);

// The findIndex() method returns the index of the first element 
// in the arr that satisfies the provided testing function. 
// Otherwise -1 is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/findIndex


// ==================  re-assigning value of element after finding index ================

// arr[arr.indexOf("Bird")] = 'Cat';
// console.log('arr is now: ', arr);

// ============ slice =================
// console.log(arr);
// var part = arr.slice(arr[arr.length - 3], arr[arr.length - 1])
// console.log(part)

// ============ slice =================
// console.log(arr);
// var part1 = arr.slice(arr[arr.length - 3])
// var part2 = arr.slice(arr[arr.length - 3], arr[arr.length - 1])
// console.log(part1)
// console.log(part2)

// ============ splice =================
// console.log(arr);
// var part1 = arr.splice(arr[arr.length - 3])
// var part2 = arr.splice(arr[arr.length - 3], arr[arr.length - 1])
// console.log(part1)
// console.log(part2)
// console.log('arr is now: ', arr);

// var part3 = arr.splice(arr[arr.length - 3], arr[arr.length - 1])
// console.log(part3)
// console.log('arr is now: ', arr);
// document.getElementById('main').append(part1)
