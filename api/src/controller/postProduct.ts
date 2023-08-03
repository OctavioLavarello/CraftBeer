import {Request, Response} from "express"
import { Product } from "../../db";

const postProduct = async (req: Request, res: Response) => {
    try {
        const {
            name,
            image,
            type,
            degreeOfAlcohol,
            description,
            qualification,
            price,
            stock,
            presentation
        }= req.body

        if(!name) res.status(400).json({message: "name is required"});
        if (!image) res.status(400).json({message: "image is required"})
        if (!type) res.status(400).json({message:"type is required"})
        if (!degreeOfAlcohol) res.status(400).json({message:"degrees of alcohol is required"})
        if (!description) res.status(400).json({message:"description is required"})
        if (!qualification) res.status(400).json({message:"qualification is required"})
        if (!price) res.status(400).json({message:"price is required"})
        if (!stock) res.status(400).json({message:"stock is required"})
        if (!presentation) res.status(400).json({message:"presentation is required"})

        
        const product = await Product.create({
            name,
            image,
            type,
            degreeOfAlcohol,
            description,
            qualification,
            price,
            stock,
            presentation,
            status:true
        })

        res.status(200).json(product)

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message)
        }
        else {
            res.status(500).send("Unexpected error")
        }
    }
};


export default postProduct;