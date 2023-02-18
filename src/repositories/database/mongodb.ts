import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const mongoConnect = process.env.MONGODB_URL

async function startDB() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(`${mongoConnect}`)
}

export { startDB }