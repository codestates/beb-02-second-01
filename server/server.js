const express = require('express');
const mongoose = require ('mongoose');
const dotenv =  require('dotenv');
const cors = require('cors');

const routesURLs = require('./routes/routes');

dotenv.config();

const app = express();


const PORT = process.env.PORT;
const port = PORT || 8888;

mongoose.connect(process.env.DB_ACCESS, ()=>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use('/app', routesURLs)
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});


/* import dotenv from 'dotenv';
import cors from 'cors';
import indexRouter from './routes';


dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('aaa');
}); */


