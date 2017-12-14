const app = require('express')();
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel'); // created model loading here
const bodyParser = require('body-parser');
const routes = require('./api/routes/todoListRoutes');

const port = process.env.PORT || 3001;
const allowCrossDomain = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
  } else {
    next();
  }
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); // register the route
app.listen(port);

console.log(`todo list RESTful API server started on:   ${port}`);
