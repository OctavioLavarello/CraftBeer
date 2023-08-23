import axios from "axios";
import { Cart } from "../Cart/Cart";

const PayCart = (dataPay: Cart) => {

  const handlePay = async () => {
    try {
      const endpoint = "/create-order"
      const response = await axios.post(endpoint, {
        products: dataPay.product,
        user: dataPay.user
      });
      console.log(response);

      const linkPay = response.data.results.response.init_point;

      return window.location.href = linkPay
    } catch (error) {
      console.error("Error fetching payment link:", error);
    }
  };

  handlePay();
}

export default PayCart;


