const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')


//MIDDLEWARE
app.use(cors());

app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

//CONNECT TO DB
async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Failed to connect to DB:', error);
    }
}

connectToDB();

//LISTEN TO THE SERVER
app.listen(3000);