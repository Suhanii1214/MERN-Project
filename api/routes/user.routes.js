import express from "express";
import { updateUser, deleteUser, test } from "../controllers/user.controllers.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = express.Router()

userRouter.get('/test', test)
userRouter.post('/update/:id', verifyToken, updateUser)
userRouter.delete('/delete/:id', verifyToken, deleteUser)
export default userRouter