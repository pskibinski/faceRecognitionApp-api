const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const handleSignIn = require('./controllers/signin');
const handleRegister = require('./controllers/register');
const handleImage = require('./controllers/image');
const handleProfile = require('./controllers/profile');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'kodleu496zpw',
    database: 'smart-brain'
  }
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json(database.users);
});

app.post('/signin', (req, res) =>
  handleSignIn.handleSignIn(req, res, knex, bcrypt)
);

app.post('/register', (req, res) =>
  handleRegister.handleRegister(req, res, knex, bcrypt)
);

app.get('/profile/:id', (req, res) =>
  handleProfile.handleProfile(req, res, knex)
);

app.put('/image', (req, res) => handleImage.handleImage(req, res, knex));

app.post('/imageurl', (req, res) => handleImage.handleApiCall(req, res));

app.listen(3001, () => {
  console.log('App is running on port 3001.');
});
