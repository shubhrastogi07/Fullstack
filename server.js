const express = require('express')
const PORT = 3000
const app = express()
    // const verify = (req, res, next) => {
    //     console.log(req.headers['user-agent'])
    //     if (req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") next()
    //     else res.send('Blocked')
    // }

const isAdmin = (req, res, next) => {
    if (req.headers.admin === 'true') next()
    else res.send("UNAUTHORISED")
}


app.get('/public', (req, res) => {
    console.log(req.headers)
    res.send(`I'm a public route`)
})

app.get('/private', isAdmin, (req, res) => {
    res.send(`I'm a admin route`)
})

app.listen(PORT, () => {
    console.log(`server Listening at port ${PORT}`)
})