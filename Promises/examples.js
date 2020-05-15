//*********************************NEW PROMISE***************************************************************/
let promise = new Promise((resolve, reject) => {
	if (true) {
		console.log(1);
		resolve('Successfully done!!');
		console.log(2);
	} else {
		console.log(3);
		reject(new Error('Failed!!'));
		console.log(4);
	}
});

promise
	.then((data) => {
		console.log('On Then: ', data);
		return 'Data for next Then';
	})
	.then((data) => {
		console.log('On Next Then: ', data);
	})
	.catch((error) => {
		console.log('on Catch: ', error.message);
	});

//********************************** PROMISE WITH TIMEOUT **************************************************************//

let promise = new Promise((resolve, reject) => {
	if (true) {
		setTimeout(() => resolve('Successfully done!!'), 1000);
	} else {
		setTimeout(() => reject(new Error('Failed!!')), 1000);
	}
});

promise
	.then((data) => {
		console.log('On Then: ', data);
		return 'Data for next Then';
	})
	.then((data) => {
		console.log('On Next Then: ', data);
	})
	.catch((error) => {
		console.log('on Catch: ', error.message);
	});

//**********************************FUNCTION RETURNING PROMISE**************************************************************/

function compute(a, b) {
	return new Promise((resolve, reject) => {
		if (a && b) {
			return resolve(`${a} + ${b} = ` + (a + b));
		} else return reject(new Error('Invalid Input'));
	});
}
let promise = compute(10, 15);
promise
	.then((data) => {
		console.log('Success: ', data);
	})
	.catch((error) => {
		console.error(error);
	});

promise = compute(10, undefined);
promise
	.then((data) => {
		console.log('Success: ', data);
	})
	.catch((error) => {
		console.error(error);
	});

//***************************************DELAY FUNCTIon ::: EXERCISE*********************************************************/
function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), ms);
	});
}

console.log('Start');
delay(5000).then(() => console.log('runs after 5 seconds'));

//***************************************PROMISE CHAINING*********************************************************/

function compute(a, b) {
	return new Promise((resolve, reject) => {
		if (a && b) {
			return resolve(`${a} + ${b} = ` + (a + b));
		} else return reject(new Error('Invalid Input'));
	});
}
function calculate(a, b) {
	return new Promise((resolve, reject) => {
		if (a && b) {
			return resolve(`${a} + ${b} = ` + (a + b));
		} else return reject(new Error('Invalid Input'));
	});
}
compute(10, 15)
	.then((data1) => {
		console.log(1, data1);
		return compute(11, 22);
	})
	.then((data2) => {
		console.log(2, data2);
		return calculate(1, 2);
	})
	.then((data3) => {
		console.log(3, data3);
		console.log('All Promises Resolved!!');
	})
	.catch((err) => {
		console.error(err);
	});

// TODO:

loadScript('/article/promise-chaining/one.js').then((script1) => {
	loadScript('/article/promise-chaining/two.js').then((script2) => {
		loadScript('/article/promise-chaining/three.js').then((script3) => {
			// this function has access to variables script1, script2 and script3
			one();
			two();
			three();
		});
	});
});

//***************************************PROMISE.ALL*********************************************************/

function compute(a, b) {
	return new Promise((resolve, reject) => {
		if (a && b) {
			return resolve(`${a} + ${b} = ` + (a + b));
		} else return reject(new Error('Invalid Input'));
	});
}
let arr = [compute(1, 2), compute(3, 4), compute(5, 6), 'Hello'];
let promise = Promise.all(arr);
promise
	.then((responses) => {
		console.log(responses);
	})
	.catch((err) => {
		console.error(err);
	});
Promise.allSettled(arr).then((results) => {
	console.log(results);
});

//***************************************Promisify*********************************************************/

function compute(a, b, callback) {
	callback(null, a + b);
}
function promisify(f) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			function callback(err, res) {
				if (err) reject(err);
				else resolve(res);
			}
			f.call(null, ...args, callback);
		});
	};
}

let calculate = promisify(compute);
calculate(2, 3)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});

//***************************************Promisify with multiple result*********************************************************/

function compute(a, b, callback) {
	callback(null, a + b, 'A+B', 'SUM', 'ADD');
}
function promisify(f) {
	return function (...args) {
		return new Promise((resolve, reject) => {
			function callback(err, ...res) {
				if (err) reject(err);
				else resolve(res.length === 1 ? res[0] : res);
			}
			f.call(null, ...args, callback);
		});
	};
}

let calculate = promisify(compute);
calculate(2, 3)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err);
	});
