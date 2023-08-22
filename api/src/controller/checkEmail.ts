import { UserPerson, UserCompany } from "../../db"
import { Request, Response } from "express";

const checkEmail = async ( req:Request,res:Response) => {
try {
    const email = req.query.email
    const findUser = await UserPerson.findOne({ where: { email } });
    const findCompany = await UserCompany.findOne({ where: { email } });

    if (!findUser && !findCompany) {
        return res.status(200).send(false)
    } else {
        return res.status(200).send(true)
    }


} catch (error) {
    return res.status(500).json({ message: "Internal server error" });
}
    
}

export default checkEmail;
