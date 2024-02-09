require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Routers = require('./Router/router')

const Port = process.env.PORT;
const URL = process.env.DATABASE_URL;

const app = express()

app.use(cors({
    origin: ["http://localhost:3000", "https://techysoftware.vercel.app"],
    credentials: true
}));

app.use(express.json())

mongoose.connect(URL)
    .then(() => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.log("Database connection failed", err)
    })

app.options('*', cors());

app.use('/router', Routers)


app.listen(Port, (err) => {
    if (err) {
        console.log("Server Connection Problem", err)
    }
    console.log("successfully connected")
})