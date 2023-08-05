import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { UserCompany } from '../../db';

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
      });
    } else {
      companies = await UserCompany.findAll();
    }

    return res.status(200).json(companies);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default getAllCompanies;
