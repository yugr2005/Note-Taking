const express = require("express");
const cors = require("cors");
const app = express();
const port = 4050;

const db = require('./db');
const mainRouter = require('./Routes/index');

app.use(express.json());
app.use(cors());


app.use('/user', mainRouter);


app.listen(port, () => {
    console.log(`Server running on ${port}.`)
})