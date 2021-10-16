const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const token = "TOP_SECRET"
let Products = [{ name: 'iPhone12 Case', Price: '999' }, { name: 'iPhone12pro Case', Price: '1499' }, { name: 'iPhone12proMax Case', Price: '1999' }, { name: 'iPhone12Mini Case', Price: '799' }]

const validator = (req, res, next) => {
    const { name, Price } = req.body
    if (!name || !Price) res.json({ error: "Validation failed" })
    else next()

}
const isAuthorized = (req, res, next) => {
    if (req.headers.authorisation === token) next()
    else res.json({ error: "Unauthorised" })

}


//----------Public Routes------------------
//Get Route
// Send all Products
app.get('/products', (req, res) => {
    res.json({ Products })
})

//---------Private Route----------------------
app.post('/products/add', isAuthorized, validator, (req, res) => {

    console.log(req.body.Price)
    const { name, Price } = req.body
    Products.push({
        name,
        Price,
    })

    res.send('product is Added')

})

//-------------Authentication-----------------
app.post('/auth', (req, res) => {
    if (email === 'admin@123mail.com' && password === 'password') {
        res.send({ token })
    } else {
        res.send({
            message: "Unauthorised"
        })
    }
})

app.listen(PORT, () => {
    console.log(`server Listening at port ${PORT}`)
})