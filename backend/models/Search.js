const mongoose = require("mongoose");

const Search = mongoose.Schema({
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Search", Search);
