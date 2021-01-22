const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

//here I will be using the connect function in the mongoose library to connect my server to mongoDB also using dotenv for not showing password and console log to show database connecting successfully
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

//this line actiavtes the body parser
app.use(express.json())
app.use(cors())
//routesUrls will be appended to this base path
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running"))