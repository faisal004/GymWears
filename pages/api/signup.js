// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongoose";
import User from "../../models/user";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    const {name ,email}=req.body;
    let u = new User({name , email,password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()});
    await u.save();

    res.status(200).json({ succes: "succes" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
