const express = require('express');
const bodyParser = require('body-parser');

// initialise the express server
const app = express();

// register middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect to database
require('./helpers/connection')();

// Register routers
require('./routes/users.routes')(app);

//This wheee you run the server
app.listen(3000, () => {
  console.log('server running on port 3000');
});
