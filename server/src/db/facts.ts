const mongoose = require("mongoose");
const FactSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  keyword: {
    type: String,
    required: true,
  },
});
export const FactModel = mongoose.model("Facts", FactSchema);
export const getFacts = () => FactModel.find();
export const getFactById = (id: string) => FactModel.findOne({ id: id });

export const createFact = async (values: Record<string, any>) => {
  const fact = await new FactModel(values).save();
  return fact.toObject();
};
export const deleteFact = (id: string) =>
  FactModel.findOneAndDelete({ id: id });
export const updateFact = (id: string, values: Record<string, any>) =>
  FactModel.findOneAndReplace({ id: id }, values);
