import express from "express"
import { CreateUser } from "../controllers/userController.js";
import { PrismaClient } from "@prisma/client";

const userRoute = express.Router();

export const prismaClient = new PrismaClient({
    log:['query']
})
userRoute.post('/createUser',CreateUser);

export default userRoute;