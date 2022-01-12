const path = require('path');

express = require('express');
const bodyParser = require('body-parser');

const app = express();

const firstRoutes = require('./routes/first');
const secondRoutes = require('./routes/second');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', firstRoutes);
app.use('/second', secondRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

})

app.listen(3000);