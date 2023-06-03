import { Schema, model, models } from "mongoose";

const SummarySchema = new Schema({
  summary: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required:true,
    ref: "User",
  },
  url:{
    type:String,
    required:true,
  }
});

const Summary = models.Summary || model("Summary", SummarySchema);

export default Summary;
