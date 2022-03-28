const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  emailAddy: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Email = mongoose.model("Email", emailSchema);

module.exports = {
  schema: emailSchema,
  model: Email
};