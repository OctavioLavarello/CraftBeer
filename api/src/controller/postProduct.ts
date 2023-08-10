import { Request, Response } from "express";
import { Product, UserCompany } from "../../db";

const postProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      image,
      type,
      ABV,
      description,
      price,
      stock,
      IBU,
      presentation,
      userCompanyId,
    } = req.body;

    if (!name) return res.status(400).json({ message: "name is required" });
    if (!image) return res.status(400).json({ message: "image is required" });
    if (!type) return res.status(400).json({ message: "type is required" });
    if (!ABV) return res.status(400).json({ message: "ABV is required" });
    if (!description) return res.status(400).json({ message: "description is required" });
    if (!price) return res.status(400).json({ message: "price is required" });
    if (!stock) return res.status(400).json({ message: "stock is required" });
    if (!presentation) return res.status(400).json({ message: "presentation is required" });

    const company = await UserCompany.findByPk(userCompanyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const product = await Product.create({
      name,
      image,
      type,
      ABV,
      description,
      price,
      stock,
      presentation,
      IBU,
      status: true,
    });
    //realizo la relacion del producto con la empresa
    company.addProduct(product)
    // se envia plain:true para solo recibir los datos que necesitamos.
    res.status(200).json({...product.get({ plain: true }),userCompanyId});
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default postProduct;
