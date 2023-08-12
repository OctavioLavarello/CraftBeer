import { Request, Response } from "express";
import dotenv from "dotenv";
import {
  PreferenceBackUrl,
  PreferenceItem,
  CreatePreferencePayload,
  PreferencePayer,
} from "mercadopago/models/preferences/create-payload.model";
dotenv.config();

// SDK de Mercado Pago
import mercadopago from "mercadopago";
import { Product } from "../../../db";
// Agrega credenciales
const { TEST_ACCES_TOKEN } = process.env;

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, products } = req.body;

    const item: PreferenceItem[] = [];

    for (const product of products) {
      item.push({
        title: `cerveza ${product.name}`,
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
        success: "http://localhost:5173/succes",
        pending: "http://localhost:5173/pending",
        failure: "http://localhost:5173/failure",
      } as PreferenceBackUrl,
      auto_return: "approved",
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
