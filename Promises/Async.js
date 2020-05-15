/*************************************************Class with await and new *************************************************/
class Simple {
	constructor() {
		console.log('Constructor Called!!');
	}
	then(resolve, reject) {
		console.log('Then Called!!');
		resolve(1);
	}
}
(async () => {
	let simple = await new Simple(1);
	console.log(simple);
})();

/************************************************* Aync await function************************************************/
function compute(a, b) {
	return new Promise((resolve, reject) => {
		if (a && b) {
			return resolve(`${a} + ${b} = ` + (a + b));
		} else return reject(new Error('Invalid Input'));
	});
}

(async () => {
	try {
		let a = await compute(1, 2);
		let b = await compute(12, 33);
		let c = await compute(10, 20);
		console.log(a + '\n' + b + '\n' + c);
	} catch (error) {
		console.error(error.message);
	}
})();

/************************************************* Promise.all************************************************/

function compute(a, b) {
	return new Promise((resolve, reject) => {
		if (a && b) {
			return resolve(`${a} + ${b} = ` + (a + b));
		} else return reject(new Error('Invalid Input'));
	});
}

(async () => {
	try {
		let res = await Promise.all([compute(1, 2), compute(2, 3)]);
		console.log(res);
	} catch (error) {
		console.error(error.message);
	}
})();
