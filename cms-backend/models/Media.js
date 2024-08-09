const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Media', MediaSchema);
