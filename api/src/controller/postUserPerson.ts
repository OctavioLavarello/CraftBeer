import { UserPerson } from "../../db";
import { Request, Response } from "express";
import postUserValidation from "../validations/postUserValidations";
import postAccountConfirm from "../controller/postAccountConfirm";
const postUserPerson = async (req: Request, res: Response) => {
  try {
    const {
      name,
      lastName,
      document,
      email,
      password,
      address,
      image,
      country,
      city,
    } = req.body;
    const errors = postUserValidation(
      name,
      lastName,
      document,
      email,
      password,
      address,
      image,
      country,
      city
    );

    if (errors) return res.status(400).json({ message: errors });

    const userPerson = await UserPerson.create({
      name,
      lastName,
      document,
      email,
      password,
      address,
      image,
      status: true,
      country,
      city,
      role: "Person",
    });

    if (userPerson) {
      return postAccountConfirm(name, email);
    }
    console.log("creacion exitosa")
    return res.status(200).send("usuario creado exitosamente");
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error.");
    }
  }
};
export default postUserPerson;
