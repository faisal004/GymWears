// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongoose";
import User from "../../models/User";
const handler = async (req, res) => {
  if (req.method == 'POST') {
let u= new User(req.body)
 await u.save()

    res.status(200).json({ succes: "succes" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDB(handler);
