import connectDB from "../../middleware/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  
  if (req.method == "POST") {
    let user = await User.findOne({ "email": req.body.email });
    
    var bytes = CryptoJS.AES.decrypt(user.password, "secret123");
    console.log(bytes.toString(CryptoJS.enc.Utf8));
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
   
    if (user) {
      if (req.body.email == user.email && req.body.password == originalText)
      { 
        var token = jwt.sign(
          { email: user.email, name: user.name },
          "jwtsecret"
        );
        res.status(200).json({ succes: true, token });
      } 
      else 
      {
        res.status(200).json({ succes: false, error: "Invalid Credential" });
      }
    } 
    else {
      res.status(200).json({ succes: false, error: "No user found" });
    }
  } 
  else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
