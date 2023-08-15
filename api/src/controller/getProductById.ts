import { Request, Response } from "express";
import { Product, Qualification } from "../../db";

const getProductById = async (req: Request, res: Response) => {
  try {
    const { idProduct } = req.params;

    const beer = await Product.findOne({
      where: {
        id: idProduct,
      },
      include: {
        model: Qualification,
        attributes: ["rate", "comment","userPersonId","id"],
      },
    });

    if (!beer) throw new Error("this beer is not exist");

    return res.status(200).json(beer.get({ plain: true }));//guardar los datos planos
  } catch (error) {
    console.log(error)
    return res.status(500).send({ error });
  }
};

export default getProductById;
