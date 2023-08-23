import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/actions";
import { AnyAction, Dispatch } from "redux";

interface ChoiceRoleProps {
  userData: {
    name: string;
    lastName: string;
    email: string;
    image: string;
    email_verified: boolean;
  };
}

interface CreateInteface {
  name: string;
  email: string;
  lastName: string;
  email_verified: boolean;
}

const ChoiceRole: React.FC<ChoiceRoleProps> = (props) => {
  const { userData } = props;

  const dispatch = useDispatch<Dispatch<AnyAction> | any>();

  const handleOnBuyClick = async () => {
    // Lógica para crear un usuario con el rol de comprador

    try {
      const createUser: CreateInteface = {
        name: userData.name,
        email: userData.email,
        lastName: userData.lastName,
        email_verified: userData.email_verified,
      };

      await axios.post(`user`, createUser);

      setGlobalLogin(createUser);
    } catch (error:any) {
      console.error("Error:", error);
      
      alert(`Ha ocurrido un error: ${error.message}`);
    }
  };

  const HandleOnSaleClick = async () => {
    try {
      const createCompany: CreateInteface = {
        name: userData.name,
        lastName: userData.lastName,
        email: userData.email,
        email_verified: userData.email_verified,
      };

      await axios.post(`/company`, createCompany);

      setGlobalLogin(createCompany);
    } catch (error:any) {
      console.error("Error:", error);
      
      alert(`Ha ocurrido un error: ${error.message}`);
    }
    
  };

  const setGlobalLogin = async (user: CreateInteface) => {
    //setear login con los datos
    const userLogin:any = {
        email: user.email,
        email_verified: user.email_verified
    }
    try {
      await dispatch(login(userLogin));
    } catch (error:any) {
      console.error("Error:", error);
      alert(`Ha ocurrido un error: ${error.message}`);
    }
    
  };

  return (
    <div>
      <h2>what do you want?</h2>
      <button onClick={handleOnBuyClick}>Buy</button>
      <button onClick={HandleOnSaleClick}>Sale</button>
    </div>
  );
};

export default ChoiceRole;
