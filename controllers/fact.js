const model = require("../models/fact");
const { Fact } = model;
exports.getFacts = async (req, res) => {
  const facts = await Fact.find().sort({ votesInteresting: -1 });
  res.json(facts);
};
exports.addFact = (req, res) => {
  const fact = new Fact(req.body);
  fact.save();
  res.json(fact);
};
exports.updateFact = async (req, res) => {
  const { id } = req.params;
  const fact = await Fact.findByIdAndUpdate(id, { ...req.body }, { new: true });
  res.json(fact);
};
