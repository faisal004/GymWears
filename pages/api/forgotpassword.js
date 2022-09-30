// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Forgot from "../../models/forgot"
import User from "../../models/user"

export default async function handler(req, res) {
    if(req.body.sendMail){
    let forgot=new Forgot({
        email:req.body.email,
        token:token

    })
    let email=` We have sent you this email in response to your request to reset your password on GymWears.com. After you reset your password, any credit card information stored in My Account will be deleted as a security measure.

    <br/><br/>

    To reset your password , please follow the link below:

    <a href="http://localhost:3000/forgotpass?token=${token}">Click here to reset the password</a>

    <br/><br/>

    We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your. Account Setting Page and clicking on the "Change Email Address or Password" link.

    <br/><br/>

    If you need help, or you have any other questions, feel free to email support@gym, or call +91-9992223334 customer service toll-free at ${site-toll-free-number}.

    <br/><br/>`}

    res.status(200).json({ success:true })
  }
  