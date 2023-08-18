import { Request, Response } from "express"
import { UserCompany, Product } from "../../db"

const getCompanyById = async (req: Request, res:Response) => {
    try {
        const {idCompany} = req.params

        const company = await UserCompany.findOne({
            where:{
                id: idCompany,
                status: true
            },
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