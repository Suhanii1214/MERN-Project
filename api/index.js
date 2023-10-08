import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js"

dotenv.config();

mongoose.connect("mongodb+srv://suhanii1214:Suhani12345@cluster0.t6pvr22.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
})

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.use("/api/user", userRouter)
