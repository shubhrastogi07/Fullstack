// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request, response) => {
//     //     // console.log(request.headers)
//     //     //console.log(request.method)
//     //     const markup = fs.readFileSync(path.resolve('./index.html'))
//     //     response.write(markup)
//     //     response.end()
//     // })
//     // // console.log(server)
//     const { url } = request
//     if (url == '/login') {
//         response.write('<h1>Login</h1>')
//         response.end()
//     }
//     if (url == '/signup') {
//         response.write('<h1>SignUp</h1>')
//         response.end()
//     }
// })

// server.listen(3000, () => {
//     console.log(`Server listening at PORT:${3000}`)
// })
const data = [{ Name: "Shubh Rastogi" }, { Name: "Shubh Rastogi" }, { Name: "Shubh Rastogi" }]
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    console.log(req.url)
    res.send('this is response')
})
app.get('/Names', (req, res) => {
    console.log(req.url)
    res.send(data)
})
app.listen(3000, () => {
    console.log('server Listening at port 3000')
})