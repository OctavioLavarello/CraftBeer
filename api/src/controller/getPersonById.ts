import { Request, Response } from "express"
import { ShoppingHistory, UserPerson, Item } from "../../db"
import { Model } from "sequelize"

const getPersonById = async (req: Request, res:Response) => {
    try {
        const {idPerson} = req.params

        const person = await UserPerson.findOne({
            where:{
             id: idPerson
            },
            include: {
                model: ShoppingHistory,
                include: Item,
              },
            }
            )

            if (!person) throw new Error("this name does not exist")
        
            return res.status(200).send(person)            

    } catch (error) {
        console.log(error)
        return res.status(500).send({ error });
    }
}

export default getPersonById;