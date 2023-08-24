import { Request, Response } from "express";
import dotenv from "dotenv";
import {
  PreferenceBackUrl,
  PreferenceItem,
  CreatePreferencePayload,
  PreferencePayer,
} from "mercadopago/models/preferences/create-payload.model";
dotenv.config();

const localhost = "http://localhost:5173"
const frontDeploy = "https://craftbeer-team.netlify.app"


// SDK de Mercado Pago
import mercadopago from "mercadopago";

// Agrega credenciales
const { TEST_ACCES_TOKEN } = process.env;

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, products } = req.body;

    const item: PreferenceItem[] = [];

    for (const product of products) {
      item.push({
        title: `${product.name}`,
        description: `${product.describe}`,
        picture_url: `${product.image}`,
        quantity: product.quantity,
        currency_id: "USD",
        unit_price: product.price,
      });
    }

    mercadopago.configure({
      access_token: `${TEST_ACCES_TOKEN}`,
    });

    const results = await mercadopago.preferences.create({
      items: item,
      payer: {
        name: user.name,
        surname: user.lastName,
        email: user.email,
      } as PreferencePayer,
      back_urls: {
        success: `${frontDeploy}/succes`,
        pending: `${frontDeploy}/pending`,
        failure: `${frontDeploy}/failure`,
      } as PreferenceBackUrl,
      notification_url: `https://craftbeer.up.railway.app/webhook`,
      auto_return: "all"
    });

    console.log(item);

    console.log(results);

    res.status(200).json({ results });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};