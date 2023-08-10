import { Request, Response } from "express";
import { Qualification } from "../../db";
import { Product } from "../../db";

const postQualification = async (req: Request, res: Response) => {
  try {
    // se recibe por body
    const { rate, userPersonId, productId } = req.body;
    if (!rate || !userPersonId || !productId) {
      return res.status(400).send("Required information");
    } else {
      // si estan todos los datos de Qualification se crea en la base de datos
      const creatingRatings = await Qualification.create({
        rate,
        userPersonId,
        ProductId: productId,
      });
    }
    //busco las calificaciones del producto
    let rating = await Qualification.findAll({
      where: { ProductId: productId },
      attributes: ["rate"],
    });
    // realizo el promedio del producto

    let qualifications = rating.reduce(
      (acc: number, rate: { rate: number }) => {
        acc = rate.rate + acc;
        return acc;
      },
      0
    );

    const average = (qualifications / rating.length).toFixed(2);

    // agrego el promedio de calificaciones al producto
    const updateProductQualification = await Product.update(
      { qualification: average },
      {
        where: { id: productId },
      }
    );
    if (updateProductQualification[0] === 0) {
      return res.status(400).send("Failed to update rating");
    } //retorno el producto con el promedio actualizado
    else {
      return res.status(200).json(updateProductQualification);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error");
    }
  }
};
export default postQualification;
