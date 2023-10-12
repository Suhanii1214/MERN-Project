import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.routes.js";
import listingRouter from "./routes/listing.routes.js"
import cookieParser from "cookie-parser";

dotenv.config();

mongoose.connect("mongodb+srv://suhanii1214:Suhani12345@cluster0.t6pvr22.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
})

const app = express();
const port = 3000;

app.use(express.json());

app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)
app.use("/api/listing", listingRouter)
 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode 
    || 500
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
