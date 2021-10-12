const fs = require('fs')

// 


// console.log('I am a random log')
fs.writeFile('./test.txt', "Hello", (error) => {
        if (error) console.log(error)
    })
    //console.log(fs.readFileSync('./test.txt', 'utf-8'))
fs.readFile('./test.txt', 'utf-8', (error, data) => {
    if (error) console.log(error)
    else console.log(data)
    console.log(typeof data)
})