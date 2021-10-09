const add = () => {
    console.log('I Add ')
}
const sub = () => {
    console.log('I substract ')
}
const multi = () => {
    console.log('I multiply ')
}
const div = () => {
    console.log('I divide ')
}
module.exports.add = add
module.exports.sub = sub
module.exports.multi = multi
module.exports.div = div
console.log(module)