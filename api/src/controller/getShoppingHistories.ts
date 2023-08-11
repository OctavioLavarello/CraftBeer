import { Request, Response } from 'express';
import { ShoppingHistory } from '../../db';
import { Item } from '../../db';

const getShoppingHistories = async (req: Request, res: Response) => {
  try {
    const { userPersonId } = req.query;

    if (!userPersonId) {
      return res.status(404).json({ error: 'Parameter userPersonId not found.' });
    }

    const shoppingHistories = await ShoppingHistory.findAll({
      where: { userPersonId },
      include: [{ model: Item }],
    });

    return res.status(200).json(shoppingHistories);
  } catch (error) {
    console.error('Error getting shoppingHistories:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

export default getShoppingHistories;
