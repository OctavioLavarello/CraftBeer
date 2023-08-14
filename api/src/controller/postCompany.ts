import { Request, Response } from "express";
import { UserCompany, UserPerson } from "../../db";
import postAccountConfirm from "./postAccountConfirm";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,30}$/;

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

    if (!name) return res.status(400).json({ message: "Name is required." });
    if (/\d/.test(name))
      return res.status(400).json({ message: "Name cannot include a number." });
    if (name.length > 30)
      return res
        .status(400)
        .json({ message: "Name cannot exceed 30 characters." });

    if (!lastName)
      return res.status(400).json({ message: "Name is required." });
    if (/\d/.test(lastName))
      return res.status(400).json({ message: "Name cannot include a number." });
    if (lastName.length > 30)
      return res
        .status(400)
        .json({ message: "Last Name cannot exceed 30 characters." });

    if (!company)
      return res.status(400).json({ message: "Last name is required." });
    if (/\d/.test(company))
      return res
        .status(400)
        .json({ message: "Company cannot include a number." });
    if (company.length > 30)
      return res
        .status(400)
        .json({ message: "Company cannot exceed 30 characters." });

    if (!address)
      return res.status(400).json({ message: "Address is required" });

    if (!country)
      return res.status(400).json({ message: "Country is required" });

    if (!state) return res.status(400).json({ message: "State is required" });

    if (!city) return res.status(400).json({ message: "City is required" });

    if (!document)
      return res.status(400).json({ message: "Document is required." });
    if (isNaN(document))
      return res
        .status(400)
        .json({ message: "Document must be a valid number." });

    if (!phone) return res.status(400).json({ message: "Phone is required." });
    if (isNaN(phone))
      return res.status(400).json({ message: "Phone must be a valid number." });

    if (!email) return res.status(400).json({ message: "Email is required." });
    if (!emailRegex.test(email))
      return res.status(400).json({ message: "Invalid email address" });

    if (!password)
      return res.status(400).json({ message: "Password is required." });
    if (!passwordRegex.test(password))
      return res.status(400).json({
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, and one digit. (6 - 30 char)",
      });
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
