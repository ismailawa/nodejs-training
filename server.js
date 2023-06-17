const express = require('express');
const bodyParser = require('body-parser');

const users = require('./models/users');

const app = express();

require('./routes/')(app);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//This is where you write your codes
app.post('/users', (req, res) => {
  res.status(201).json(users.create(req.body));
});

app.get('/users', (req, res) => {
  res.status(200).json(users.find());
});

app.get('/users/:id', (req, res) => {
  const result = users.findOne(+req.params.id);
  res.status(200).json(result);
});

app.put('/users/:id', (req, res) => {
  const id = +req.params.id;
  const body = req.body;
  res.status(200).json(users.update(id, body));
});
app.delete('/users/:id', (req, res) => {
  const id = +req.params.id;
  res.status(200).json(users.delete(id));
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
