import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { UserCompany } from '../../db';

const getCompanys = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.query;
    let companys;
    if (name) {
      companys = await UserCompany.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
      });
    } else {
      companys = await UserCompany.findAll();
    }

    res.status(200).json(companys);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export default getCompanys;
