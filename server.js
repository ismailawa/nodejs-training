const express = require('express');
const bodyParser = require('body-parser');

const conn = require('./helpers/connection');

// initialise the express server
const app = express();

// register middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register routers
require('./routes/users.routes')(app);
require('./routes/courses.routes')(app);

//This wheee you run the server
app.listen(3000, () => {
  console.log('server running on port 3000');
});
