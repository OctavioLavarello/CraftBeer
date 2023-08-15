import { Request, Response } from 'express';
import { Product } from '../../db';

const putProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const { companyId, totalPrice, ...updatedData } = req.body;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }

    if(!companyId && !totalPrice){
      return res.status(404).send({ message: "Required information." });
    }
    
    if (companyId && companyId !== product.companyId) {
      return res.status(403).send({ message: "You do not have permission to modify this product." });
    }

    await product.update(updatedData, { fields: Object.keys(updatedData) });

    return res.status(200).send({ message: "Product updated successfully." });
  } catch (error) {
    console.error("Error updating the product:", error);
    return res.status(500).send({ message: "Internal server error." });
  }
};

export default putProduct;
