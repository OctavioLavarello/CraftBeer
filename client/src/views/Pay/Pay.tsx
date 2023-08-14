import axios from "axios";
import { Cart } from "../Cart/Cart";

const PayCart = (dataPay: Cart) => {

  const handlePay = async () => {
    try {
      const response = await axios.post("http://localhost:3001/create-order", {
        products: dataPay.product,
        user: dataPay.user
      });
      const linkPay = response.data.results.response.init_point;
      // borrar el storage si se ejecuta la compra 
      if (response.data.results.response.auto_return === "approved") {
        const dataStorage = Object.keys(localStorage).filter(key => key !== "user")
        dataStorage.forEach(key => {
          localStorage.removeItem(key);
        })
      }
      return window.location.href = linkPay
    } catch (error) {
      console.error("Error fetching payment link:", error);
    }
  };

  handlePay();

}

export default PayCart;


/* 


  const handlerDELETE = ()=>{
    
    });
  
  
  }*/