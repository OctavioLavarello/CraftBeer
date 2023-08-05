import { Request, Response } from "express";
import { UserCompany } from "../../db";

const putUserCompany = async (req: Request, res: Response) => {
    try {
         //llega el objeto empresa por body
    const company = req.body;
    console.log(company)
    // busca la persona por id , compara todos los datos y los actualiza
    const updateUserCompany = await UserCompany.update(company, {
      where: { id: company.id },
    });
    if(updateUserCompany[0] === 0){
        return res.status(400).send('No se pudo realizar la actualización');
  }
  else{
    return res.status(200).json("se actualizó satisfactoriamente");
  }
 } catch (error ) {
    return res.status(500).send( {error});
  }
};


export default putUserCompany;
