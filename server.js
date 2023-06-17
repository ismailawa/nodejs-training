const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//This is where you write your codes
require('./routes/users.routes')(app);

//This wheee you run the server
app.listen(3000, () => {
  console.log('server running on port 3000');
});
