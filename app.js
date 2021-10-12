const path = require('path')

console.log(path.resolve('./app.js'))
console.log(path.relative('./', "utilies.js"))
console.log(path.extname('./app.js'))
console.log(path.dirname('./Full Stack/app.js'))
console.log(__dirname)
console.log(path.join(__dirname, 'app.js'))