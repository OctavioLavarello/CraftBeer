import { Request, Response } from 'express';
import { ShoppingHistory, UserPerson } from '../../db'; 
import { Item } from '../../db';
import postPurchaseConfirmation from "./postPurchaseConfirmation"

const postShoppingHistory = async (req: Request, res: Response) => {
  try {
    const { date, totalPrice, userPersonId, items } = req.body;

    if(!date){
        return res.status(404).send({ error: 'Date is required' });
    };

    if(!totalPrice){
        return res.status(404).send({ error: 'TotalPrice is required' });
    };

    if(!userPersonId){
        return res.status(404).send({ error: 'UserPersonId is required' });
    };

    const person = await UserPerson.findByPk(userPersonId);

    if(!person){
        return res.status(404).send({ error: 'UserPerson not found' });
    };

    const newShoppingHistory = await ShoppingHistory.create({
        date,
        totalPrice,
        userPersonId,
    });
    let newItems;
    if (!items || items.length === 0){
        return res.status(404).send({ error: 'No items found to upload' });
    }else{
         newItems = await Item.bulkCreate(
            items.map((item: any) => ({
                ...item,
                ShoppingHistoryId: newShoppingHistory.id,
            }))
        );
        await newShoppingHistory.setItems(newItems);
    }
    if(newShoppingHistory){
       return  postPurchaseConfirmation(date,totalPrice,userPersonId,newItems)
    }
    return res.status(201).send(newShoppingHistory);
  } catch (error) {
    console.error('Error creating shoppingHistory:', error);
    return res.status(400).send({ error: 'Internal server error' });
  }
};

export default postShoppingHistory;
