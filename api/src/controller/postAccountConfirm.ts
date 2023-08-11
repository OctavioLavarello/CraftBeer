import { Request, Response } from "express";
const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;

const postAccountConfirm = async (req: Request, res: Response) => {

  try {
    const { name, email } = req.body;
    let transporter = nodemailer.createTransport({  
    
      //options -- define los datos de conexión
      host:"smtp.gmail.com",
      port:587,
      secure:false,
      auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS,
      },
    });
    //defaults es un objeto que se fusionará en cada objeto de mensaje.
    let mailOptions = {
      from: "craftbeer514@gmail.com",
      to: email,
      subject: `¡Hola ${name} se creo satisfactoriamente tu cuenta!, `,
      html: `<html>
	<head>
        <body>
        <h2>¡Hola ${name}, bienvenido!🍻 </h2><img src='https://i.postimg.cc/wjbRFfkV/Simple-October-Fest-Instagram-Post-6.png'/>
        <p>Tu cuenta ha sido creada satisfactoriamente en Craftbeer.</p>
        <p>Si no has sido tú quien realizó esta solicitud, comunícate con nuestra línea de atención al cliente:</p>
        <p>craftbeer514@gmail.com</p>
		</body>
	</head>
</html>`
    };

    transporter.sendMail(mailOptions, (error: any, res: any) => {
      if (error) {
        console.log(error);
        return res.status(400).send(error.message);
      } else {
        console.log("Message sent:" + res.message);
      }
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error.");
    }
  }
};

export default postAccountConfirm;
