import { Request, Response } from "express";
import { UserCompany } from "../../db";

const putUserCompany = async (req: Request, res: Response) => {
  try {
    //llega el objeto empresa por body
    const company = req.body;
    // busca la persona por id , compara todos los datos y los actualiza
    const updateUserCompany = await UserCompany.update(company, {
      where: { id: company.id },
    });
    if (updateUserCompany[0] === 0) {
      return res.status(400).send("Update failed");
    } else {
      const userCompanyUpdated = await UserCompany.findByPk(company.id);
      if(!userCompanyUpdated){
        return res.status(200).json("was successfully updated");
      }else{
        return res.status(200).json(userCompanyUpdated);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error.");
    }
  }
};

export default putUserCompany;
