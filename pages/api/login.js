import connectDB from "../../middleware/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");
const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ "email": req.body.email });
    var bytes  = CryptoJS.AES.decrypt(user.password, 'secret123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (req.body.email == user.email && req.body.password == originalText) {
        res
          .status(200)
          .json({ succes: true, email: user.email, name: user.name });
      } else {
        res.status(200).json({ succes: false, error: "Invalid Credential" });
      }
    } else {
      res.status(200).json({ succes: false, error: "No user found" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
