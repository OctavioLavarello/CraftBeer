import { Request, Response } from "express"
import { ShoppingHistory, UserPerson, Item } from "../../db"

const getPersonAdmin = async (req: Request, res:Response) => {
    try {
        const {idPerson} = req.params;
              
        const person = await UserPerson.findByPk(idPerson,{
            include: {
                model: ShoppingHistory,
                include: Item,
            },
        })

        if (!person) throw new Error("this name does not exist")
    
        return res.status(200).send(person)            

    } catch (error) {
        console.log(error)
        if (error instanceof Error)  {
            return res.status(500).send(error.message)
        }
        else {
            return res.status(500).send("error inesperado")
        }

    }
}

export default getPersonAdmin;