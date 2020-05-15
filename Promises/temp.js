// let fun = () => {
// 	return new Promise((resolve, reject) => {
// 		resolve(123);
// 	});
// };
// let prom = fun();
// setTimeout(() => console.log('SET Timeout'), 0);
// for (let i = 0; i < 100; i++) {
// 	prom.then((res) => console.log(i + 1) || i + 1);
// }
// console.log('Hello');
//-------------------------------------------

// console.log('Start');
// const fun = async () => {
// 	console.log('Normal Print');
// 	console.log(await 10);
// 	console.log('Print after await');
// 	setTimeout(() => console.log('Timer in Async'), 0);
// };
// fun();
// console.log('End');
// setTimeout(() => console.log('Timer in Script'), 0);

//-----------------------------------------------------

// function addTwo(a, b) {
// 	return new Promise((resolve, reject) => {
// 		resolve('a+b = ' + (a + b));
// 	});
// }
// (async () => {
// 	let prom1 = addTwo(1, 2);
// 	let prom2 = addTwo(3, 4);
// 	let [v1, v2] = [await prom1, await prom2];
// 	console.log(v1, v2);
// 	let results = await Promise.all([addTwo(1, 2), addTwo(3, 4)]);
// 	console.log(results);
// })();
