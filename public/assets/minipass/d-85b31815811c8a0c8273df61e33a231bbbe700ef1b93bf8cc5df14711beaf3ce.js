var MD = require('./')
var d = new MD()
console.log(d.write('hello'))
console.log(d.write('goodbye'))
d.pipe(process.stderr)
console.log(d.write('the end'))
console.log(d.end())
;
