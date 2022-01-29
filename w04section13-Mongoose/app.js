const path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// For uploading to heroku
const corsOptions = {
  origin: "https://cse341-week4.herokuapp.com/",
  optionsSuccessStatus: 200
};
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://kayleem:ZKdxkk9we3TKBWN@cluster0.b7bze.mongodb.net/shop?retryWrites=true&w=majority";
                      

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(cors(corsOptions));
const options = {
  family: 4
};

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('61f47f9ab344d2e69cf35363')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
 
app.use(errorController.get404);

mongoose.connect(MONGODB_URL, options)
.then(result => {
  User.findOne().then(user => {
    if (!user) {
      const user = new User({
        name: 'Test',
        email: 'test@test.com',
        cart: {
          items: []
        }
      });
      user.save();
    }
  });
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
})
.catch(err => {
  console.log(err);
});