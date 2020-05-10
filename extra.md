for (prop in src[i]) {
obj['_' + prop] = src[i][prop];
Object.defineProperty(obj, prop, {
enumerable: true,
configurable: true,
get: function () {
return this['_' + prop]
},
set: function (val) {
var oldValue = this['_' + prop]
this['_' + prop] = val;
console.log(prop, val)
if (oldValue != val) {
console.log('change detected');
//reflect
if (!timerID) {
timerID = setTimeout(global.dom.reflectChanges, time)
}
}
}
})
}
