import { Request, Response } from "express";
import { Product } from "../../db";

const getTopRated = async (req: Request, res: Response) => {
  try {
    const topRated = await Product.findAll({where:{status:true},
      order: [["qualification", "DESC"]],
      limit: 8,
    });
    return res.status(200).json(topRated)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default getTopRated;
