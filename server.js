require('dotenv').config();
const express = require('express');

// initialise the express server
const app = express();

// register middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register routers
require('./routes/users.routes')(app);

//This wheee you run the server
app.listen(5001, () => {
  console.log('server running on port 5001');
});
