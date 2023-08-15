import { Request, Response } from 'express';
import { ShoppingHistory, UserPerson, Item, Product } from '../../db';
import postPurchaseConfirmation from "./postPurchaseConfirmation";

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

    if (!person) {
        return res.status(404).send({ error: 'UserPerson not found' });
    }

    const newShoppingHistory = await ShoppingHistory.create({
        date,
        totalPrice,
        userPersonId,
    });

    let createdItems;

    if (!items || items.length === 0){
        return res.status(404).send({ error: 'No items found to upload' });

    }else{
        createdItems = await Promise.all(items.map(async (item: any) => {
     
        const { ProductId, amount, totalPrice: itemTotalPrice } = item;

        // Buscar el producto en la base de datos
        const product = await Product.findByPk(ProductId);

        if (!product) {
            console.warn(`Product with ID ${ProductId} not found.`);
            return null;
        }

        // Verificar si hay suficiente stock para realizar la compra
        if (product.stock < amount) {
            console.warn(`Not enough stock for product with ID ${ProductId}.`);
            return null;
        }

        // Crear el registro del item en la tabla Item
        const createdItem = await Item.create({
            ShoppingHistoryId: newShoppingHistory.id,
            ProductId: ProductId,
            amount,
            totalPrice: itemTotalPrice,
        });

        // Actualizar el stock del producto
        const newStock = product.stock - amount;
        await Product.update({ stock: newStock }, { where: { id: ProductId } });

        return createdItem;
    }))};

    // Filtrar los elementos nulos (que no se pudieron crear) del array
    const newItems: any = createdItems.filter(item => item !== null);

    // Realizar la confirmación de compra (si es necesario)
    if (newShoppingHistory) {
        await postPurchaseConfirmation(date, totalPrice, userPersonId, newItems);
    }

    return res.status(201).send(newShoppingHistory);
  } catch (error) {
        console.error('Error creating shoppingHistory:', error);
        return res.status(500).send({ error: 'Internal server error' });
  }
};

export default postShoppingHistory;


