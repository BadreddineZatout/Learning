const express = require('express');
const morgan = require('morgan');
//express app
const app = express();

//listen to requests
app.listen(3000);

//middelwares and static files
app.use(express.static('public'));
app.use(morgan('dev'));

//register view engine
app.set('view engine', 'ejs');

//routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

//redirects
app.get('/about-us', (req,res) => {
    res.redirect('/about');
});
//404 error
app.use((req, res) => {
    res.status(400).render('404');
});