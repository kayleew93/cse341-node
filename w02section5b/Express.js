const express = require('express');

const app = express();

/*
app.use((req, res, next) => {
    console.log('Message in the console that always runs.');
    next();
}); 

app.use((req, res, next) => {
    console.log('Message in the console that always runs.');
    res.send('<h1>Return a response.</h1>' );
}); 
*/
app.use('/users', (req, res, next) => {
    res.send('<h1>Return a response -- Users</h1>' );
});

app.use('/', (req, res, next) => {
    res.send('<h1>Return a response -- Generic</h1>' );
});

app.listen(3000);