const mongoose = require("mongoose");
const { Schema } = mongoose;

const factSchema = new Schema({
  text: String,
  source: String,
  category: String,
  votesInteresting: { type: Number, default: 0 },
  votesMindblowing: { type: Number, default: 0 },
  votesFalse: { type: Number, default: 0 },
});

exports.Fact = mongoose.model("Fact", factSchema);
