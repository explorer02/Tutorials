function reduce(arr, fun, init) {
	let accum = init;
	arr.forEach((el) => {
		if (!accum) return (accum = el);
		return (accum = fun(accum, el));
	});
	return accum;
}
let arr = [1, 2, 3, 4, 5];
let fun = (a, b) => a + b;
console.log(arr);
console.log(reduce(arr, fun));
console.log(reduce(arr, fun, 10));

// [1, 2, 3, 4, 5]
// 15
// 25

arr = [
	{ a: 1, b: 2 },
	{ a: 2, c: 3 },
	{ a: 3, d: 5, b: 4 }
];
const merge = (o1, o2) => {
	for (let prop in o2) o1[prop] = o2[prop];
	return o1;
};
console.log(arr);
console.log(reduce(arr, merge));
console.log(reduce(arr, merge, { q: 1, d: 3 }));

/*
[Object, Object, Object]
Object {a: 3, b: 4, c: 3, d: 5}
Object {q: 1, d: 5, a: 3, b: 4, c: 3}
*/
