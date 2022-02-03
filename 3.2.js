let arr = [1, 2, 3, 0, 5, 7, 8, 9];

let evennum = arr.filter(function(elem) {
	return elem % 2 == 0;
});

console.log(evennum);

let oddnum = arr.filter(i => i % 1 == 0 && i % 2 != 0);

console.log(oddnum);


let zeronum = arr.filter(i => i === 0);

console.log(zeronum);
 
