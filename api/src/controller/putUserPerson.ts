import { Request, Response } from "express";
import { UserPerson } from "../../db";

const putUserPerson = async (req: Request, res: Response) => {
  try {
    //llega el objeto persona por body
    const person = req.body.person;
    // busca la persona por id , compara todos los datos y los actualiza
    const updateUserPerson = await UserPerson.update(person, {
      where: { id: person.id },
    });
    console.log(updateUserPerson)
    return res.status(200).json("se actualizó satisfactoriamente");
  } catch (error ) {
    return res.status(500).send( {error});
  }
};

export default putUserPerson;
