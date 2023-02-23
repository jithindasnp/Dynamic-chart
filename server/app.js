const express = require('express')
const dataRouter = require('./src/routes/dataRouter')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
var cors = require('cors');
app.use(cors());

app.use('/api',dataRouter)

app.listen(3001, () => {
    console.log("Server started at port 3001");
})