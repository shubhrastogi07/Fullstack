// let value = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Shubh Rastogi");
//         }, 3000);
//     }).then(value => console.log(value))
//     // console.log(value)
//     // setTimeout(() => {
//     //     console.log(value)
//     // }, 4000)
const table = document.querySelector('table')
console.log(table)
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            let newRow = document.createElement('tr')
            let element = ` 
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>`
            newRow.innerHTML = element
            table.appendChild(newRow)

        })

    })