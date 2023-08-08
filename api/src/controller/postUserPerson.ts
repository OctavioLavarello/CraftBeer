import { UserPerson } from "../../db";
import { Request, Response } from "express";
import UserRole from "../emuns";

const postUserPerson = async (req: Request, res: Response) => {
  try {
    const { name, lastName, document, email, password, address, image, role, country, city, state } =
      req.body;

    if (!name) return res.status(400).json({ message: "name is required" });
    if (!lastName) return res.status(400).json({ message: "lastName is require" });
    if (!document) return res.status(400).json({ message: "document is required" });
    if (!email) return res.status(400).json({ message: "email is equired" });
    if (!password) return res.status(400).json({ message: "password is required" });
  

    const userPerson = await UserPerson.create({
      name,
      lastName,
      document,
      email,
      password,
      country,
      city,
      state, 
      address,
      image,
      status: true,
      role: "Person"
    });

    return res.status(200).json(userPerson);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error.");
    }
  }
};
export default postUserPerson;
