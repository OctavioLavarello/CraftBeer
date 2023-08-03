import { Request, Response } from 'express';
import { Product } from '../../db';
import { Op } from 'sequelize';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { type, order } = req.query;

    // Definir las opciones de consulta
    const options: any = {};

    // Si se proporciona un query param 'type', filtrar por tipo
    if (type) {
      options.where = { type: { [Op.eq]: type } };
    }

    // Ordenar según el valor de order (asc o desc)
    if (order && (order === 'OrderAscPrice' || order === 'OrderDesPrice')) {
      const columnToOrderBy = order === 'OrderAscPrice' ? 'price' : [['price', 'DESC']];
      options.order = [columnToOrderBy];
    }

    // Obtener todos los productos si no se proporciona el query param 'type'
    const products = await Product.findAll(type ? options : undefined);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export default getAllProducts;
