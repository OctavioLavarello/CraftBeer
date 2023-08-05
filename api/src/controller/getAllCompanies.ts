import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { UserCompany, Product } from '../../db';

const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    let companies;
    if (name) {
      companies = await UserCompany.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: [{ model: Product, as: 'products' }] // Cargar productos relacionados
      });
    } else {
      companies = await UserCompany.findAll({
        include: [{ model: Product, as: 'products' }] // Cargar productos relacionados
      });
    }

    return res.status(200).send(companies);
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export default getAllCompanies;
