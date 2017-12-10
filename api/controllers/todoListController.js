const mongoose = require('mongoose');

const Task = mongoose.model('Tasks');

exports.list_all_tasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.json(task);
    }
  });
};

exports.create_a_task = (req, res) => {
  const newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) {
      res.send(err);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.json(task);
    }
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  console.log('taskId',req.params);
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};