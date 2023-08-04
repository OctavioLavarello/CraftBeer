import { useEffect, useState } from "react";
import axios from "axios";
import CardModel from "../CardModel/CardModel";

interface BeerData {
  id: string;
  image: string;
  name: string;
  type: string;
  description: string;
  degreeOfAlcohol: number;
  presentation: string;
  price: number;
  stock: number;
  qualification?: number;
  status: string;
}

const CardShop = () => {
  const [allBeersData, setAllBeersData] = useState<BeerData[]>([]);

  const getAllBeers = async () => {
    const endpoint = "http://localhost:3001/product";
    try {
      const response = await axios.get<BeerData[]>(endpoint);
      setAllBeersData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <>
      {allBeersData.map((product) => (
        <CardModel
          key={product.id}
          id={product.id}
          name={product.name}
          summary={product.description}
          image={product.image}
          price={product.price}
          status={product.status}
        />
      ))}
    </>
  );
};

export default CardShop;
