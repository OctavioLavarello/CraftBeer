import { Request, Response } from "express";
import { UserPerson, Product } from "../../db";

const favoriteHandler = async (req: Request, res: Response) => {
  try {
    
    // se recibe id del userPerson y del producto
    const { userPersonId, ProductId } = req.body;
  
    // se busca si existe el id del userperson
    const searchUserPersonId = await UserPerson.findByPk(userPersonId);
  
    if (!searchUserPersonId) {
      return res.status(401).send("UserPerson id not found");
    }
      // si existe el id de userPerson busque el id del producto 
    const searchProductId = await Product.findByPk(ProductId);
    if (!searchProductId ) {
        return res.status(401).send("Product id not found");
      }
    //busco los productos asociados a la persona
      const searchProducts = await searchUserPersonId.getProducts()
// si el id del producto existe en el userPerson eliminelo sino adicionalo.
      const favorite = searchProducts.find((arg:any)=>{
        if(arg.id === searchProductId.id){
          return  arg.removeUserPerson(searchUserPersonId)
        }else{
           return searchProductId.addUserPerson(searchUserPersonId);
        }
      })
    return res.status(200).json(favorite)
  } catch (error) {
    if (error instanceof Error) {
        return res.status(500).send(error.message);
      } else {
        return res.status(500).send("Unexpected error");
      }
    }
  }

export default favoriteHandler;
