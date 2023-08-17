import { Request, Response } from "express";
import { UserCompany, UserPerson } from "../../db";
import postAccountConfirm from "./postAccountConfirm";
import postCompanyValidation from "../validations/postCompanyValidation";


const postCompany = async (req: Request, res: Response) => {
  try {
    const {
      name,
      lastName,
      document,
      email,
      password,
      phone,
      country,
      state,
      city,
      company,
      address,
      image,
    } = req.body;

    const errors = postCompanyValidation

    
      //validacion para que no se pueda registrar , si ya se encuentra en la base de datos.
    if (email) {
      const EmailUnique = await UserPerson.findOne({ where: {email: email} });
      if(EmailUnique) return res.status(400).send( "This email is already registered");
    }
    const userCompany = await UserCompany.create({
      name,
      lastName,
      document,
      company,
      country,
      state,
      city,
      address,
      email,
      phone,
      password,
      image,
      status: true,
      role: "Company",
    });
    if (userCompany) {
      postAccountConfirm(company, email);
    }
    return res.status(200).json(userCompany);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default postCompany;
