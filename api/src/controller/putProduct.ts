import { Request, Response } from 'express';
import { Product } from '../../db';

const putProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  console.log(productId);
  
  const { companyId, ...updatedData } = req.body;
  console.log(req.body);
  
  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }
    
    if (companyId !== product.userCompanyId) {
      return res.status(403).send({ message: "You do not have permission to modify this product" });
    }

    const updatedProduct = await product.update(updatedData, { fields: Object.keys(updatedData) });

    if (updatedProduct[0] === 0) {
      return res.status(400).send("Update failed");
    } else {
      const productUpdated = await Product.findByPk(productId);
      if(!productUpdated){
        return res.status(200).send({ message: "Product updated successfully" });
      }else{
        return res.status(200).json(productUpdated);
      }
    }
  } catch (error) {
    console.error("Error updating the product:", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

export default putProduct;
