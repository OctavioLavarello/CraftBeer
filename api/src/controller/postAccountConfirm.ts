const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;

const postAccountConfirm = async (name:String, email:String) => {
  try {
  
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
      from: "craftbeer514@gmail.com",
      to: email,
      subject: `¡Hola ${name} se creo satisfactoriamente tu cuenta!, `,
      html: `<html>
	<head>
        <body>
        <h2>¡Hola ${name}, bienvenido!🍻 </h2><img src='https://i.postimg.cc/wjbRFfkV/Simple-October-Fest-Instagram-Post-6.png' width="70" height="70"/>
        <p>Tu cuenta ha sido creada satisfactoriamente en Craftbeer.</p>
        <p>Si no has sido tú quien realizó esta solicitud, comunícate con atención al cliente:</p>
        <p>craftbeer514@gmail.com</p>
		</body>
	</head>
</html>`,
    };

    transporter.sendMail(mailOptions, (error: any, info:string) => {
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

export default postAccountConfirm;
