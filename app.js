const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')
div.innerHtml = localStorage.getItem('InputValue')

button.addEventListener('click', (req, res) => {
        localStorage.setItem('InputValue', input.value)
        div.innerHTML = "dafdafsd"
    })
    // div.innerHtml = localStorage.getItem('InputValue')
    // console.log(localStorage.getItem("InputValue"))