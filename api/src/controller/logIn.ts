import { Request, Response } from "express";
import { UserCompany, UserPerson } from "../../db";

const logIn = async (req: Request, res: Response) => {
    try {
      const { password, email } = req.query
  
      if (!email) return res.status(400).json({ message: "Email is required" });
      else if (!password) return res.status(400).json({ message: "Password is required" });
  
      const findUser = await UserPerson.findOne({ where: { email } });
      const findCompany = await UserCompany.findOne({ where: { email } });
        
      if (!findUser && !findCompany) {
        return res.status(404).json({ message: "User not found" });
      }
  
      if (findUser){
        if(findUser.dataValues.status === false) {
          return res.status(404).json({ message: "Disabled user" }); 
        }else{
          if (findUser.password === password) {
            return res.status(200).json({ access: true, user: findUser });
          }else{
            return res.status(400).json({ message: "invalid password" });
      }}}else{
        if(findCompany.dataValues.status === false){
          return res.status(404).json({ message: "Disabled user" });
        }else{   
          if (findCompany.password === password) {
              return res.status(200).json({ access: true, user: findCompany });
          } else {
              return res.status(400).json({ message: "invalid password" });
          }
        }
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

export default logIn;
