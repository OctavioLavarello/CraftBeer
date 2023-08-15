import { Request, Response } from 'express';
const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;

const postContactMe = async (req: Request, res: Response) => {
  try {
    const {name,email,phone,message} = req.body;
    // inicia la funcion de recibir el mensaje
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
    // se fusionará en cada objeto de mensaje.
    let mailOptions = {
      from: "craftbeer514@gmail.com",
      to: "craftbeer514@gmail.com",
      subject: "Tienes una solicitud",
      html: `<html>
	<head>
        <body>
        <h3 style="color:#9E7842">Datos del usuario:<h3>
        <p><b>Nombre:</b> ${name}.</p>
        <p><b>Correo electrónico:</b> ${email}</p>
        <p><b>Telefono de contacto:</b> ${phone}.</p>
        </br>
        <h3 style="color:#9E7842">Solicitud:</h3>
        <p>🍻 ${message}.<p>
		</body>
	</head>
</html>`,
    };

    transporter.sendMail(mailOptions, (error: any, info: string) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("Message sent:" + info);
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error.");
    }
  }
};

export default postContactMe;
