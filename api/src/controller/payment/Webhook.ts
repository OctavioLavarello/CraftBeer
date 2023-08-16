import { log } from "console";
import { Request, Response } from "express";
import mercadopago from "mercadopago";

const reciveWebHook = async (req: Request, res: Response) => {
  try {
    const payment = req.query;

    if (typeof payment.type === "string" && payment.type === "payment") {
      if (
        typeof payment["data.id"] === "string" ||
        typeof payment["data.id"] === "number"
      ) {
        const data = await mercadopago.payment.findById(
          Number(payment["data.id"])
        );
        console.log("--------------respuesta de mercado pago-----------------");
        console.log(data);

        return res.status(200).json(data);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default reciveWebHook;
