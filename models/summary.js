import { Schema, model, models } from "mongoose";

const SummarySchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required:true,
    ref: "User",
  },
});

const Summary = models.Summary || model("Summary", SummarySchema);

export default Summary;
