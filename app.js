const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
div.innerHtml = localStorage.getItem('InputValue')

const arr = [1, 2, 3, 4, 5]

console.log()
localStorage.setItem('val', JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem('val')))