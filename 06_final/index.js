import express from 'express';
import {urlsRouter} from './routes/urls.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'pug');
app.set('views', './views'); //default
app.use('/css', express.static('public'));


//Connecting to the Database
mongoose.connect('mongodb://localhost/node-shortener', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

    //Welcome Message for the API, in Future it will be a documentation
app.get('/', (req, res) => {
    res.render('index');  // Render the Pug template without the shortened URL
});

//Importing the routes
app.use('/', urlsRouter);

//Startin the server
app.listen(port, () => console.log(`Listening on port ${port}...`));



