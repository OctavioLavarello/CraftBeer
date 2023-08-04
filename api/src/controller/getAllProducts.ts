import { Request, Response } from 'express';
import { Product } from '../../db';
import { Op } from 'sequelize';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { price, order } = req.query;

    // Definir las opciones de consulta
    const options: any = {};

    // Si se proporciona un query param 'type', filtrar por tipo
    if (price) {
        options.where = { price: { [Op.lte]: price } };
    }

    // // Si se proporciona un query param 'order', ordenar según el valor (asc o desc)
    // if (order && (order === 'OrderAscPrice' || order === 'OrderDesPrice')) {
    //   options.order = [['price', order]]; // Ordenar por precio ascendente o descendente
    // }


    // Si se proporciona un query param 'order', ordenar según el valor (asc o desc)
if (order && (order === 'OrderAscPrice' || order === 'OrderDesPrice')) {
    const columnToOrderBy = order === 'OrderAscPrice' ? 'price' : [['price', 'DESC']];
  
    options.order = [columnToOrderBy];
  }
  



    // Obtener las cervezas según las opciones de consulta
    const products = await Product.findAll(options);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ error });
  }
};

export default getAllProducts;