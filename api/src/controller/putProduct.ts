import { Request, Response } from 'express';
import { Product } from '../../db';

const putProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const { companyId, ...updatedData } = req.body;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).send({ message: "Producto no encontrado" });
    }
    
    if (companyId !== product.companyId) {
      return res.status(403).send({ message: "No tienes permisos para modificar este producto" });
    }

    await product.update(updatedData, { fields: Object.keys(updatedData) });

    return res.status(200).send({ message: "Producto actualizado exitosamente" });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    return res.status(500).send({ message: "Error interno del servidor" });
  }
};

export default putProduct;
