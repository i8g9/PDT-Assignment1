const express = require('express')
const { engine } = require('express-handlebars');

const app = express()

app.use('/static', express.static('public'));

app.engine('handlebars', engine({extname: '.handlebars', defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/score', function (req, res) {
    res.render('score');
});

app.get('/sqrt', function (req, res) {
    res.render('sqrt');
});

app.get('/hypotenuse', function (req, res) {
    res.render('hypotenuse');
});


app.listen(3000, () => console.log('Hello world on port 3000'))
