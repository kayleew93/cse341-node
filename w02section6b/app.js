const path = require('path');
const PATH = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User '});
});

app.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'User', users: users });
});

app.post('/add-user', (req, res, next) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(PATH);