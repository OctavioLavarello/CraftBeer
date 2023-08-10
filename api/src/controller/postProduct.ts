import { Request, Response } from "express";
import { Product, UserCompany } from "../../db";
import postProductValidation from "../validations/postProductValidations";

const postProduct = async (req: Request, res: Response) => {
  try {
    const {name, image, type, ABV, description, price, stock, IBU, presentation, userCompanyId,
    } = req.body;

    const errors = postProductValidation(
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
    )

    if (errors) return res.status(400).json({message: errors})

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
      userCompanyId
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
