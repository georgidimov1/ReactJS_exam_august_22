const mongoose = require('mongoose') 
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password:   { type: String, required: true },
    info: {
      tel: {type: String},
      mail: {type: String}
    },
    properties:[{type: mongoose.Types.ObjectId, ref: "Property"}]
  });

  const User = mongoose.model('User', userSchema);

module.exports = User;