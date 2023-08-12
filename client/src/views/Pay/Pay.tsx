import axios from "axios";
import {useState} from "react"
import { Link } from "react-router-dom";



  const Pay = () => {
    const [link, setLink] = useState("");
  
   const user = {
    name: "Diego",
    lastName: "Beta",
    document: 25485662,
    email: "DiegoBeta@gmail.com",
    password: "12345678",
    country: "Colombia",
    city: "Bogotá",
    state: "Cundinamarca",
    address: "calle 25 N° 15 20",
    phone: "+5457987654321",
  };
  

  
  const product: any = [{
    name: "Blanca",
    image: "https://3cordilleras.com/wp-content/uploads/2020/01/blanca.png",
    type: "Wheat Ale",
    ABV: 4.6,
    description:
      "Suave, fresca, notas ﬂorales tenues, sin sensación de amargo.",
    price: 30,
    stock: 100,
    presentation: "Botella",
    IBU: 15,
    status: true,
    quantity: 3
  },
{
      name: "Mona",
      image: "https://3cordilleras.com/wp-content/uploads/2020/01/mona.png",
      type: "Ale",
      ABV: 3.9,
      description:
        " Refrescante y ligera, con suaves notas cítricas,contenido de 330 ml",
      price: 3,
      stock: 100,
      presentation: "Botella",
      IBU: 20,
      status: true,
      quantity: 1
}]
 

const handlePay = async () => {
  try {
    const response = await axios.post("http://localhost:3001/create-order", {
      products: product,
      user: user
    });
    const linkPay = response.data.results.response.init_point;
    setLink(linkPay);
  } catch (error) {
    console.error("Error fetching payment link:", error);
  }
};

  
  
  console.log(link);
  
  return (
    <div>
      <button onClick={handlePay}>Pay</button>
      <h3>
        Link de pago:{" "}
        {link && <Link to={link}>link de pago</Link>}
      </h3>
    </div>
  );
  }

export default Pay;
