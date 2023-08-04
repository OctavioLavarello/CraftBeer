import { Request, Response } from 'express';
import { Product } from '../../db';
import { Op } from 'sequelize';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { type, price, IBU, ABV, qualification, order, page } = req.query;

    // Definir las opciones de consulta
    const options: any = {};

    // Si se proporciona un query param 'type', filtrar por tipo
    if (type) {
      options.where = { type: { [Op.eq]: type } };
    }

    // Si se proporciona un query param 'price', filtrar por precio menor o igual
    if (price) {
      options.where = { ...options.where, price: { [Op.lte]: price } };
    }

    // Si se proporciona un query param 'IBU', filtrar por IBU menor o igual
    if (IBU) {
      options.where = { ...options.where, IBU: { [Op.lte]: IBU } };
    }

    // Si se proporciona un query param 'ABV', filtrar por ABV menor o igual
    if (ABV) {
      options.where = { ...options.where, ABV: { [Op.lte]: ABV } };
    }

    // Si se proporciona un query param 'qualification', filtrar por qualification mayor o igual
    if (qualification) {
      options.where = { ...options.where, qualification: { [Op.gte]: qualification } };
    }

    // Ordenar según el valor de order (asc o desc)
    if (order && ( order === 'OrderAscPrice' || order === 'OrderDesPrice' )) {
      const columnToOrderBy = order === 'OrderAscPrice' ? 'price' : [['price', 'DESC']];
      options.order = [columnToOrderBy];
    }

    // Cantidad de productos a mostrar por página
    const itemsPerPage = 15;

    // Calcular el offset para la página actual
    const currentPage = parseInt(page as string) || 1;
    const offset = (currentPage - 1) * itemsPerPage;

    // Obtener productos paginados
    const products = await Product.findAll({
      ...options,
      limit: itemsPerPage,
      offset: offset,
    });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send({ error });
  }
};

export default getAllProducts;
