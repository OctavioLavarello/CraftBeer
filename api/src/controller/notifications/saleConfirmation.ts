const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;
import { Product, UserCompany } from "../../../db";
import { UUID } from "crypto";

const saleConfirmation = async (
  person: {
    name: String;
    lastName: String;
    email: String;
    state: String;
    city: String;
    address: String;
  },
  date: Date,
  newItems: []
) => {
  try {
    // busco los datos del producto
    const searchProduct = await Promise.all(
      newItems.map(
        async (product: {
          get: Function;
          ProductId: UUID;
          name: String;
          image: string;
          amount: Number;
          unitPrice: Number;
          totalPrice: Number;
        }) => {
          const prodId = await Product.findByPk(product.ProductId);
          const searchUserCompanyId = await UserCompany.findByPk(
            prodId.userCompanyId
          );
          return {
            ...product.get({ plain: true }),
            userCompanyId: prodId.userCompanyId,
            email: searchUserCompanyId.email,
          };
        }
      )
    );
    const filterUserCompany = [];
    let allProducts = searchProduct;
    while (allProducts.length) {
      filterUserCompany.push(
        allProducts.filter((product) => product.email === allProducts[0].email)
      );
      allProducts = allProducts.filter(
        (product) => product.email !== allProducts[0].email
      );
    }
    // inicia la funcion de envío de mensaje
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
    filterUserCompany.forEach((element) => {
        console.log(element[0].email)
      let mailOptions = {
        from: NODEMAILER_USER,
        to: element[0].email,
        subject: "Notificación de venta en en la página web de CraftBeer.",
        html: `<html>
          <head>
              <body>
              </br><b style="color:##9E7842">Fecha:${date}</b></br>
              <h2>Notificación de venta en la página web de CraftBeer 🛍️. </h2>
              </br>
              <p>Craftbeer desea que tu experiencia con nuestra pagina web sea agradable 🍺 por esto te enviamos la información requerida para tu despacho.</p>
              <br/>
              <h2>Datos de tu venta:</h2>
              </br>
              <p>🍻Nombre del comprador: ${person.name} ${person.lastName}.<p>
              <p>🍻Dirección completa: ${person.state}, ${person.city}, ${
          person.address
        }.<p>
              <p>🍻Correo electrónico: ${person.email}.<p>
              <table border="1">
              <tr>
                <td style="background-color: #C4D696" align='center'><b>Producto</b></td>
                <td style="background-color: #C4D696" align='center'><b>Cantidad</b></td>
                <td style="background-color:#C4D696" align='center'><b>Precio Unitario</b></td>
                <td style="background-color: #C4D696" align='center'><b>Subtotal</b></td>
                </tr>
              ${element.reduce((acc, item) => {
                return (
                  acc +
                  `
                <tr>
                <td align='center' >${item.name}</td>
                <td align='center'>${item.amount} und</td>
                <td align='center' >${item.unitPrice} USD</td>
                <td align='center'>${item.totalPrice} USD</td>
                </tr>
                `
                );
              }, "")}
              <tr>
              <td align='center' style="background-color: #A8B295" colspan="3"><b> Total de la compra</b></td>
              <td align='center' style="background-color: #A8B295"><b> ${element.reduce(
                (acc, e) => acc + e.totalPrice,
                0
              )} USD</b></td>
              </tr>
              </table>
              <br/>
              <p>Comunícate con atención al cliente si requieres más información:</p>
              <p>craftbeer514@gmail.com</p>
              <img src='https://i.postimg.cc/wjbRFfkV/Simple-October-Fest-Instagram-Post-6.png' width="60" height="60" lign="center"/>
              </body>
          </head>
      </html>`,
      };
      console.log("enviando email")
      transporter.sendMail(mailOptions, (error: any, info: string) => {
        if (error) {
          console.log(error.message);
        } else {
          console.log("it was sent satisfactorily");
        }
      });
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error");
    }
  }
};

export default saleConfirmation;
