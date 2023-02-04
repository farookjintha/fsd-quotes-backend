require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/connect');

//Importing all routes
const quotesRoutes = require('./routes/quotes.routes');

const app = express();

//Connecting DB
db();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to our Quotes App');
})

app.use('/api', quotesRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}.`)
});