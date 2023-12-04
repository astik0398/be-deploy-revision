const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

const {connection} = require('./db')
const {userRouter} = require('./routes/user.route')
app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.listen(process.env.port , async()=> {
    try {
        await connection
        console.log('connected to the db');
        console.log(`server running on port ${process.env.port}`);
    } catch (error) {
        console.log(error);
    }
})