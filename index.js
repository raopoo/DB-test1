const express = require('express')
const db = require('./database')
const homeRouter = require('./routes/home')
const postRouter = require('./routes/posts')

const app = express()
// BODY PARSER
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//middleware
app.use('/',homeRouter)
app.use('/posts',postRouter)

// VIEW ENGINE
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))