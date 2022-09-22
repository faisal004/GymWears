const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String },
  },
  { timestamps: true }
);
mongoose.models = {};

export default mongoose.model("User", UserSchema);
