import { Request, Response } from "express";
import { Qualification } from "../../db";

const putQualification = async (req: Request, res: Response) => {
  try {
    
    const qualification = req.body;
    
    const updateQualification = await Qualification.update(qualification, {
      where: { id: qualification.id },
    });
    console.log(updateQualification);
    
    if (updateQualification [0] === 0) {
      return res.status(404).send("Qualification not updated");
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
