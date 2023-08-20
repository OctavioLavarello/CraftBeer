import { Request, Response } from "express";
import { ShoppingHistory, UserPerson, Item, Product } from "../../db";
import { UUID } from "crypto";

const getUserCompanySalesDetail = async (req: Request, res: Response) => {
  try {
    //se recibe el id de la compañia
    const { userCompanyId } = req.params;
    //se busca los productos y la relacion de sus ventas
    const products = await Product.findAll({
      where: { userCompanyId: userCompanyId },
      attributes: ["id", "name", "image", "price","description"],
      //Include Items
      include: {
        model: Item,
        attributes: ["amount", "totalPrice", "ShoppingHistoryId"],
      },
    });
    //organizar items
    const sales = products.reduce(
      (
        acc: any,
        arg: {
          id: UUID;
          name: String;
          image: String;
          price: String;
          description: String;
          Items: [];
          get: Function;
        }
      ) => {
        let argplain = arg.get({ plain: true });//traer los datos planos
        argplain.Items.forEach(
          (item: {
            amount: Number;
            totalPrice: Number;
            ShoppingHistoryId: UUID;
          }) => {
            acc.push({
              ...item,
              name: arg.name,
              image: arg.image,
              price: arg.price,
              description:arg.description
            });
          }
        );
        return acc;
      },
      []
    );

    const saleswithbuyer = await Promise.all(
      sales.map(async (arg: { ShoppingHistoryId: UUID, buyer:{name:String, lastName:String, email:String} }) => {
        let shopping = await ShoppingHistory.findByPk(arg.ShoppingHistoryId);
        let buyer = await UserPerson.findByPk(shopping.userPersonId)
        return {...arg, date: shopping.date, buyerName: `${buyer.name} ${buyer.lastName}`, buyerEmail: buyer.email }
      })
    );
    //se envia un historial detallado por cada venta
    return res.status(200).json(saleswithbuyer);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default getUserCompanySalesDetail;
