import { Request, Response } from "express";
import { UserCompany } from "../../db";

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
      brand,
      image,
    } = req.body;

    if (!name) return res.status(400).json({ message: "name is require" });
    if (!lastName) return res.status(400).json({ message: "lastName is required" });
    if (!document) return res.status(400).json({ message: "document is required" });
    if (!company) return res.status(400).json({ message: "company is required" });
    if (!country) return res.status(400).json({ message: "country is required" });
    if (!state) return res.status(400).json({ message: "state is required" });
    if (!city) return res.status(400).json({ message: "city is required" });
    if (!address) return res.status(400).json({ message: "address is required" });
    if (!email) return res.status(400).json({ message: "email is required" });
    if (!phone) return res.status(400).json({ message: "phone number is required" });
    if (!password) return res.status(400).json({ message: "password is required" });

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
      brand,
      status: true,
    });

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
