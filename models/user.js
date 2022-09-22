const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email : { type: String, require: true, index:true, unique:true,sparse:true},
    password: { type: String, require:true },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("User", UserSchema);
