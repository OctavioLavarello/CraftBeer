import { Request, Response } from "express"
import { ShoppingHistory, UserPerson, Item } from "../../db"
import { InstanceError, Model } from "sequelize"

const getPersonById = async (req: Request, res:Response) => {
    try {
        const {idPerson} = req.params;
        const {idAdmin} = req.body;

        console.log('idPerson',idPerson)
        console.log('idAdmin',idAdmin)
        
        let whereCondition: any = {
            id: idPerson,
        };
        
        let admin: any
        if(idAdmin) admin = await UserPerson.findByPk(idAdmin);
        if(!admin || admin.dataValues.role !== 'Administrator'){
            whereCondition.status = true;
        }
        
        const person = await UserPerson.findOne({
            where: whereCondition,
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
        if (error instanceof Error)  {
            return res.status(500).send(error.message)
        }
        else {
            return res.status(500).send("error inesperado")
        }

    }
}

export default getPersonById;