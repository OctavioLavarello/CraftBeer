import { Request, Response } from "express";
import { Product, Qualification } from "../../db";

const getProductAdmin = async (req: Request, res: Response) => {
  try {
    const { idProduct } = req.params;

    const product = await Product.findByPk(idProduct,{
      include: {
        model: Qualification,
        attributes: ["rate", "comment","userPersonId","id"],
      },
    });

    if (!product) {
      return res.status(404).send("This beer does not exist")
    }

    return res.status(200).json(product.get({ plain: true }));//guardar los datos planos
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error });
  }
};

export default getProductAdmin;
