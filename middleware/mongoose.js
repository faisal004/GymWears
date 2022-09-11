import mongoose from "mongoose";

const connectDB = async (handler)=> {
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect(process.env.MONGO_URI)
    return handler(req,res);
}
export default connectDB;
//hello on rest 10/09/2022
