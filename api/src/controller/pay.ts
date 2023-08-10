import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

// SDK de Mercado Pago
import mercadopago from "mercadopago";
// Agrega credenciales

const { TEST_ACCES_TOKEN } = process.env;

import {
  PreferenceBackUrl,
  CreatePreferencePayload,
  PreferencePayer,
} from "mercadopago/models/preferences/create-payload.model";

export default function handlerPay(req: Request, res: Response) {
  const { user, pay } = req.body;

  mercadopago.configure({
    access_token: `${TEST_ACCES_TOKEN}`,
  });

  // Crea un objeto de preferencia
  let preference: CreatePreferencePayload = {
    binary_mode: true,
    items: [
      {
        title: `${pay.name} - nombre del producto`,
        description: `${pay.description} - descripcion del producto`,
        picture_url: `${pay.image} - imagen del producto`,
        quantity: 1,
        currency_id: "USD",
        unit_price: pay.price,
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

      return res.status(200).json({global: response.body.id})
    })
    .catch(function (error) {
      console.log(error);
    });
}
