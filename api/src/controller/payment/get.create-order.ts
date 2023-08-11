import { Request, Response } from "express";
import dotenv from "dotenv";
import {
  PreferenceBackUrl,
  CreatePreferencePayload,
  PreferencePayer,
} from "mercadopago/models/preferences/create-payload.model";
dotenv.config();

// SDK de Mercado Pago
import mercadopago from "mercadopago";
// Agrega credenciales
const { TEST_ACCES_TOKEN } = process.env;

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, product } = req.query;

    let productToPay: any;
    let userPayment: any

    if (typeof product === "string") {
      productToPay = JSON.parse(product);
    }

    if (typeof user === "string") userPayment =JSON.parse(user)
    mercadopago.configure({
      access_token: `${TEST_ACCES_TOKEN}`,
    });

    // Crea un objeto de preferencia
    /*let preference: CreatePreferencePayload = {
    binary_mode: true,
    items: [
      {
        title: `${product.name} - nombre del producto`,
        description: `${product.description} - descripcion del producto`,
        picture_url: `${product.image} - imagen del producto`,
        quantity: 1,
        currency_id: "USD",
        unit_price: product.price,
      },
    ],
    payer: {
      name: user.name,
      surname: user.lastName,
      email: user.email,
    } as PreferencePayer,
    back_urls: {
      success: "http://succes",
      pending: "http://pending",
      failure: "http://failure",
    } as PreferenceBackUrl,
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      return res.status(200).json(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    */

    const results = await mercadopago.preferences.create({
      items: [
        {
          title: productToPay.name,
          description: productToPay.describe,
          picture_url: productToPay.image,
          quantity: productToPay.quantity,
          currency_id: "USD",
          unit_price: productToPay.price,
        },
      ],
       payer: {
            name: userPayment.name,
            surname: userPayment.lastName,
            email: userPayment.email,
          } as PreferencePayer,
          back_urls: {
            success: "http://localhost:5173/succes",
            pending: "http://localhost:5173/pending",
            failure: "http://localhost:5173/failure",
          } as PreferenceBackUrl,
          auto_return: "approved",
          
    });

    console.log(productToPay);

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
