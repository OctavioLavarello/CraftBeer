import { Request, Response } from "express"
import { Product } from "../../db"

const getProductById = async (req: Request, res:Response) => {
    try {
        const {idProduct} = req.params

        const beer = await Product.findOne({
            where:{
             id: idProduct}
            })

            if (!beer) throw new Error("this beer is not exist")
        
            res.status(200).json(beer)            

    } catch (error) {
        
    }
}

export default getProductById;