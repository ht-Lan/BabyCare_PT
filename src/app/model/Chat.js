const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Chat = new Schema(
  {
    idChat: { type: Number },
    userName: { type: String, maxLength: 255 },
    type: { type: Boolean },
    message: { type: String, maxLength: 255 },
    createdDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// Add plugin
mongoose.plugin(slug);
Chat.plugin(AutoIncrement, { inc_field: 'idChat' });
Chat.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Chat', Chat);
