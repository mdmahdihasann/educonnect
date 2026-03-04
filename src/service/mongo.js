import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(String(process.env.MONGODB_CONNECT_STRING));
        return conn;
    } catch (error) {
        console.log(err);
    }
}