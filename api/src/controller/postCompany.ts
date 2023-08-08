import { Request, Response } from "express";
import { UserCompany } from "../../db";



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
      brand,
      image,
    } = req.body;

    if (!name) return res.status(400).json({message:"Name is required."});
    if (/\d/.test(name)) return res.status(400).json({message:"Name cannot include a number."});
    if (name.length > 30) return res.status(400).json({message:"Name cannot exceed 30 characters."});
    
  
    if (!company) return res.status(400).json({message:"Last name is required."});
    if (/\d/.test(company)) return res.status(400).json({message:"Last name cannot include a number."});
    if (company.length > 30) return res.status(400).json({message:"Last name cannot exceed 30 characters."});
    
  
    if (!document) return res.status(400).json({message:"Document is required."});
    if (isNaN(document)) return res.status(400).json({message:"Document must be a valid number."});
    
  
    if (!phone) return res.status(400).json({message:"Phone is required."});
    if (isNaN(phone)) return res.status(400).json({message:"Phone must be a valid number."});
    
  
    if (!email) return res.status(400).json({message:"Email is required."});
    if (!emailRegex.test(email)) return res.status(400).json({message:"Invalid email address"});
    
  
    if (!password) return res.status(400).json({message:"Password is required."});
    if (!passwordRegex.test(password)) return res.status(400).json({message:"Password must contain at least one uppercase letter, one lowercase letter, and one digit. (6 - 30 char)"});
    

    
      
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
        role: "Company",
      });
      
     console.log(userCompany);
     
      return res.status(200).json(userCompany);
  
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
};
}

export default postCompany;
