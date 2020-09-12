const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleShema = new Schema({
  title: { type: String, require: true },
  article: { type: String, require: true },
  authorname: { type: String, require: true }
})

const Articles = mongoose.model("Article", articleShema);

module.exports = Articles;