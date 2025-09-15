import { prismaClient } from "../routes/userRoute.js";
import { hashSync } from "bcrypt";
import bcrypt from "bcrypt";

export const CreateUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const alreadyExists = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  if (alreadyExists) {
    return res
      .status(400)
      .json({ message: "Email already exists", alreadyExists });
  }

  const user = await prismaClient.user.create({
    data: {
      name: name,
      email: email,
      password: hashSync(password,10),
    },
  });

  return res.json({ message: "User created successfully", user });
};
