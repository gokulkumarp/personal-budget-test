const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    expense:{
        type:Number
    },
    budget: {
        type: String
    },
  }, {
        collection: 'expenses'
    })

module.exports = mongoose.model('expenses', userSchema)