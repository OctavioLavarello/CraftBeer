import { Request, Response } from "express";
import { UserPerson } from "../../db";

const getAllUserPersons = async (req: Request, res: Response){
    try {

        const users = UserPerson.findAll();

        if(!users){
            return res.status(200).send({ message: 'Users not found.' })
        };

        return res.status(200).send(users);

    } catch (error) {

        console.error('Error while searching for users:', error);

        return res.status(500).send({ message: 'Internal Server Error.' });
    }
};

export default getAllUserPersons;