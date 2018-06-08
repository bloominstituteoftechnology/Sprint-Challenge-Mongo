const moongoose = require('mongoose');
const ObjectId = moongoose.Schema.Types.ObjectId;

const Budget = new Mongoose.Schema ( {
  title: {
    type: String,
    required: true
  },
  budgetAmount: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Budget', Budget);