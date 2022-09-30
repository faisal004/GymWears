const mongoose = require("mongoose");

const ForgotSchema = new mongoose.Schema(
  {
    
    email : { type: String, require: true, index:true, unique:true,sparse:true},
    token: { type: String, require:true },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("Forgot", ForgotSchema);
