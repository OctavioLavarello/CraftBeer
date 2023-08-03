import { Request, Response } from "express";
import { Product } from "../../db";

const postProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      image,
      type,
      degreeOfAlcohol,
      description,
      price,
      stock,
      IBU,
      presentation,
    } = req.body;

    if (!name) return res.status(400).json({ message: "name is required" });
    if (!image) return res.status(400).json({ message: "image is required" });
    if (!type) return res.status(400).json({ message: "type is required" });
    if (!degreeOfAlcohol) return res.status(400).json({ message: "degrees of alcohol is required" });
    if (!description) return res.status(400).json({ message: "description is required" });
    if (!price) return res.status(400).json({ message: "price is required" });
    if (!stock) return res.status(400).json({ message: "stock is required" });
    if (!presentation) return res.status(400).json({ message: "presentation is required" });

    const product = await Product.create({
      name,
      image,
      type,
      degreeOfAlcohol,
      description,
      price,
      stock,
      presentation,
      IBU,
      status: true,
    });

    res.status(200).json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Unexpected error");
    }
  }
};

export default postProduct;
