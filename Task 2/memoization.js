function memoize(fun) {
	cache = {};
	return function () {
		var key = Array.prototype.join.call(arguments, ',');
		if (!(key in cache)) {
			cache[key] = fun.apply(this, arguments);
			console.log(key, cache[key]);
		}
		return cache[key];
	};
}

var memfib = memoize(function (n) {
	return n <= 1 ? n : memfib(n - 1) + memfib(n - 2);
});
console.log(memfib(40));

function fibonacci(n) {
	if (n <= 1) return n;
	if (!fibonacci[n]) fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
	return fibonacci[n];
}

console.log(fibonacci(40));
