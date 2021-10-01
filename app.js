const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const multiply = document.querySelector("#multiply")
const sub = document.querySelector("#sub")
const result = document.querySelector('.result')
    // const sum = () => {
    //     const ans = parseInt(a.value) + parseInt(b.value);
    //     result.innerHTML = ans;
    // }
    // const product = () => {
    //     const ans = parseInt(a.value) * parseInt(b.value);
    //     result.innerHTML = ans;
    // }
const calculator = (event, operation) => {
    console.log(event.target)

    switch (operation) {
        case "add":
            result.innerHTML = parseInt(a.value) + parseInt(b.value);
            break;

        case "multiply":
            result.innerHTML = parseInt(a.value) * parseInt(b.value);
            break;
        case "sub":
            result.innerHTML = parseInt(a.value) - parseInt(b.value);
            break;
        default:
            result.innerHTML = "Not Valid Operation"
    }

}

add.addEventListener('click', (event) => calculator(event, 'add'))
multiply.addEventListener('click', (event) => calculator(event, 'multiply'))
sub.addEventListener('click', (event) => calculator(event, 'sub'))