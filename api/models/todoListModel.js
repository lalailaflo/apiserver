const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  image: {
    type: Buffer,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

const ImageSchema = new Schema({
  image: {
    type: Buffer,
  },
  contentType: {
    type: String,
  },
  idTask: {
    type: String,
  },
});
module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Image', ImageSchema);
