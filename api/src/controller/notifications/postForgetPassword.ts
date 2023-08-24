import { Request, Response } from "express";
import { UserCompany, UserPerson, CodePassword } from "../../../db";
const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;

const postForgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    let searchEmail = { name: String };
    let type: String = "person";
    searchEmail = await UserPerson.findOne({ where: { email: email } });
    if (!searchEmail) {
      searchEmail = await UserCompany.findOne({ where: { email: email } });
      type = "company";
    }
    if (!searchEmail) {
      return res.status(404).send("email not found");
    }
    const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    const codeVerified = CodePassword.create({ email, code, type });
    if (codeVerified) {
      // envio correo con el codigo de 4 digitos
      let transporter = nodemailer.createTransport({
        //options -- define los datos de conexión
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: NODEMAILER_USER,
          pass: NODEMAILER_PASS,
        },
      });
      //defaults es un objeto que se fusionará en cada objeto de mensaje.
      let mailOptions = {
        from: NODEMAILER_USER,
        to: email,
        subject: "Solicitud cambio de contraseña",
        html: `<html>
        <head>
            <body>
            <h2>¡Hola ${searchEmail.name}!🍻 </h2><img src='https://i.postimg.cc/wjbRFfkV/Simple-October-Fest-Instagram-Post-6.png' width="70" height="70"/>
            <p>Tu codigo de seguridad es:</p>
            <h1>${code}</h1>
            <p>Gracias por ser parte de Craftbeer 🍻. <p>
            <br/>
            <p>Si no has sido tú quien realizó esta solicitud, comunícate con nuestra atención al cliente por medio del correo electónico craftbeer514@gmail.com </p>
            </body>
        </head>
    </html>`,
      };

      transporter.sendMail(mailOptions, (error: Error, info: string) => {
        if (error) {
          return res.status(400).send(error.message);
        } else {
          return res.status(200).send("E-mail sent");
        }
      });
    } else {
      res.status(500).send("error to create verification code");
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};

export default postForgetPassword;
