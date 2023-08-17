import { Request, Response } from "express";
import { UserPerson } from "../../db";

const getAllFavoritesPerson = async (req: Request, res: Response) => {
  try {
    const { idPerson } = req.params;

    const searchUserPersonId = await UserPerson.findByPk(idPerson);

    if (!searchUserPersonId) {
      return res.status(400).send("UserPerson id not found");
    }
    const searchProducts = await searchUserPersonId.getProducts();

    return res.status(200).json(searchProducts);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default getAllFavoritesPerson;
