import { UserCompany, UserPerson } from "../../db";
import { Request, Response } from "express";
import postUserValidation from "../validations/postUserValidations";
import accountConfirm from "./notifications/accountConfirm";
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
      state,
      role,
      email_verified
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
      city,
      state,
      email_verified
    );

    if (errors) return res.status(400).json({ message: errors });
    //validacion para que no se pueda registrar , si ya se encuentra en la base de datos.
    if (email) {
      const EmailUnique = await UserCompany.findOne({where: {email: email} });
      if(EmailUnique) return res.status(400).json({ message: "This email is already registered" });
    }

    let roleUser = role
    if(!roleUser) roleUser = "Person"
    
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
      state,
      role: roleUser,
    });

    if (userPerson) {
       accountConfirm(name, email);
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