import { Request, Response } from "express"
import { UserCompany, Product, UserPerson } from "../../db"

const getCompanyById = async (req: Request, res:Response) => {
    try {
        const {idCompany} = req.params
        const {idAdmin} = req.body;

        console.log('idPerson',idCompany)
        console.log('idAdmin',idAdmin)

        let whereCondition: any = {
            id: idCompany,
        };

        let admin: any
        if(idAdmin) admin = await UserPerson.findByPk(idAdmin);
        if(!admin || admin.dataValues.role !== 'Administrator'){
            whereCondition.status = true;
        }

        const company = await UserCompany.findOne({
            where: whereCondition,
            include: {
                model: Product
            },
        })

        if (!company) throw new Error("This company does not exist")
    
        return res.status(200).send(company)            

    } catch (error) {
        console.log(error)
        if (error instanceof Error)  {
            return res.status(500).send(error.message)
        }
        else {
            return res.status(500).send("Unexpected error")
        }

    }
}

export default getCompanyById;


// const {idPerson} = req.params;
// const {idAdmin} = req.body;

// console.log('idPerson',idPerson)
// console.log('idAdmin',idAdmin)

// let whereCondition: any = {
//     id: idPerson,
// };

// let admin: any
// if(idAdmin) admin = await UserPerson.findByPk(idAdmin);
// if(!admin || admin.dataValues.role !== 'Administrator'){
//     whereCondition.status = true;
// }

// const person = await UserPerson.findOne({
//     where: whereCondition,
//     include: {
//         model: ShoppingHistory,
//         include: Item,
//     },
// }
// )

// if (!person) throw new Error("this name does not exist")