import { UserPerson } from "../../db";
import { Request, Response } from "express";

const postUserPerson = async (req: Request, res: Response) => {
  try {
    const { name, lastName, document, email, password, address, image } =
      req.body;

    if (!name) res.status(400).json({ message: "name is required" });
    if (!lastName) res.status(400).json({ message: "lastName is require" });
    if (!document) res.status(400).json({ message: "document is required" });
    if (!email) res.status(400).json({ message: "email is equired" });
    if (!password) res.status(400).json({ message: "password is required" });

    const userPerson = await UserPerson.create({
      name,
      lastName,
      document,
      email,
      password,
      address,
      image,
      status: true
    });

    res.status(200).json(userPerson)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unexpected error.");
    }
  }
};
export default postUserPerson;
