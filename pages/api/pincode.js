// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
let pincodes={
  "226018":["Lucknow","Uttar Pradesh"],
  "110003":["Delhi","Delhi"],

}

    res.status(200).json(pincodes)
  }
  