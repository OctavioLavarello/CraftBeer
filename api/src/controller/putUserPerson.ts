import { Request, Response } from "express";
import { UserPerson } from "../../db";

const putUserPerson = async (req: Request, res: Response) => {
  try {
    //llega el objeto persona por body
    const person = req.body;
    // busca la persona por id , compara todos los datos y los actualiza
    const updateUserPerson = await UserPerson.update(person, {
      where: { id: person.id },
    });
    if(updateUserPerson[0] === 0){
        return res.status(400).send('No se pudo realizar la actualización');
  }
  else{
    console.log(updateUserPerson)
    return res.status(200).json("se actualizó satisfactoriamente");
  }
 } catch (error ) {
    console.log(error)
    return res.status(500).send( {error});
  }
};

export default putUserPerson;
