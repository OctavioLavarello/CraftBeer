import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/actions";
import { AnyAction, Dispatch } from "redux";
import { loginUserData } from "../../redux/actions/actions"

const localhost = "http://localhost:3001";

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

      await axios.post(`${localhost}/user`, createUser);

      setGlobalLogin(createUser);
    } catch (error) {
      // Manejar el error
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

      await axios.post(`${localhost}/company`, createCompany);

      setGlobalLogin(createCompany);
    } catch (error) {
      // Manejar el error
    }
  };

  const setGlobalLogin = async (user: CreateInteface) => {
    //setear login con los datos
    const userLogin:loginUserData = {
        email: user.email,
        email_verified: user.email_verified
    }
    try {
      await dispatch(login(userLogin));
    } catch (error) {}
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
