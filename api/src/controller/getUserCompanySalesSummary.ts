import { Request, Response } from "express";
import { Item, Product } from "../../db";
import { UUID } from "crypto";

const getUserCompanySalesSummary = async (req: Request, res: Response) => {
  try {
    //se recibe el id de la compañia
    const { userCompanyId } = req.params;
    //se busca los productos y la relacion de sus ventas
    const products = await Product.findAll({
      where: { userCompanyId: userCompanyId },
      attributes: ["id", "name", "image", "price", "description"],
      //Include Items
      include: {
        model: Item,
        attributes: ["amount", "totalPrice"],
      },
    });
    //organizar items y enviar detalle de venta por producto
    const salesSummary = products.map(
      (arg: {
        id: UUID;
        name: String;
        image: String;
        price: String;
        description: String;
        Items: [];
        get: Function;
      }) => {
        let argplain = arg.get({ plain: true }); // para enviar los datos planos
        let amountTotal: number = 0;
        let priceTotal: number = 0;
        argplain.Items.forEach(
          (item: { amount: number; totalPrice: number }) => {
            amountTotal = amountTotal + item.amount;
            priceTotal = priceTotal + item.totalPrice;
          }
        );
        return {
          id: argplain.id,
          name: argplain.name,
          image: argplain.image,
          price: argplain.price,
          description: argplain.description,
          amountTotal,
          priceTotal,
        };
      }
    );

    //se envia un resumen  por cada producto
    return res.status(200).json(salesSummary);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default getUserCompanySalesSummary;
