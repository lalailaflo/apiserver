const app = require('express')();
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel'); // created model loading here
const bodyParser = require('body-parser');
const routes = require('./api/routes/todoListRoutes');

const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); // register the route

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(port);

console.log(`todo list RESTful API server started on:   ${port}`);
