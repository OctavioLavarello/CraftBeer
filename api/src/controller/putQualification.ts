import { Request, Response } from "express";
import { Qualification } from "../../db";

const putQualification = async (req: Request, res: Response) => {
  try {
    //llega el objeto empresa por body
    const qualification = req.body;
    // busca la persona por id , compara todos los datos y los actualiza
    const updateQualification = await Qualification.update(qualification, {
      where: { id: qualification.id },
    });
    if (!updateQualification) {
      return res.status(404).send("Qualification not found");
    } else {
      return res.status(200).send("Qualification was successfully updated");
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send("Unexpected error.");
    }
  }
};

export default putQualification;
