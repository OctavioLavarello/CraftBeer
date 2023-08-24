import { Request, Response } from "express";
import { Product, Qualification, UserPerson } from "../../db";
import { UUID } from "crypto";

const getProductById = async (req: Request, res: Response) => {
  try {
    const { idProduct } = req.params;

    const beer = await Product.findOne({
      where: {
        id: idProduct,
        status: true,
      },
      include: {
        model: Qualification,
        attributes: ["rate", "comment", "userPersonId", "id"],
      },
    });

    if (!beer) {
      return res.status(404).send("This beer does not exist");
    }
   const productQualification = await  Promise.all(beer.Qualifications.map(async (prod:{userPersonId:UUID, get:Function})=>{
    let person = await UserPerson.findByPk(prod.userPersonId)
    return {
      ...prod.get({ plain: true }), person:person.name+" "+ person.lastName, 
    }
   }))

    return res.status(200).json({...beer.get({ plain: true }),Qualifications:productQualification}); //guardar los datos planos
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
};

export default getProductById;
