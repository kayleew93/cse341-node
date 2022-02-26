const express = require('express');

const app = express();

const professionalRouter = require('./routes/professional')

// prevents CORS error (client and server on different domains)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(professionalRouter);

app.listen(8080);