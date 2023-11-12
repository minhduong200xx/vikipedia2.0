const mongoose = require("mongoose");
const SuggestionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: String,
      required: false,
    },
  ],
});
export const SuggestionModel = mongoose.model("Suggestions", SuggestionSchema);
export const getSuggestionByUserId = (id: string) =>
  SuggestionModel.findOne({ userId: id });
export const createSuggestion = async (values: Record<string, any>) => {
  const suggestion = await new SuggestionModel(values).save();
  return suggestion.toObject();
};
export const updateSuggestionByUserId = (
  id: string,
  values: Record<string, any>
) => SuggestionModel.findOneAndReplace({ id }, values);
