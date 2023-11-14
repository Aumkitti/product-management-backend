const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
        require: true
  },
  details: {
    type: String,
        require: true
  },
  type: {
    type: String,
        require: true
  },
  image: {
    type: String,
        require: true
  },
  updateAt:{
    type:Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product' ,productSchema);
