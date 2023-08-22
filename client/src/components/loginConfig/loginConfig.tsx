import {
  GoogleLogin,
  GoogleOAuthProvider,
  PromptMomentNotification,
} from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useState } from "react";
import { IdClient } from "./loginGoolgecredentials";
import ChoiceRole from "../../views/ChoiceRole/ChoiceRole";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/actions";
import { AnyAction, Dispatch } from "redux";
import { loginUserData } from "../../redux/actions/actions";

const clientId = IdClient;
const localhost = "http://localhost:3001";

const LoginGoogle: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const dispatch = useDispatch<Dispatch<AnyAction> | any>();
  
  const handleGoogleSuccess = async (response: any) => {
    const idToken = response.credential;

    try {
      const decodedToken: any = jwtDecode(idToken);
      const email = decodedToken.email;
      const response = await axios.get(`${localhost}/check?email=${email}`);
      const exist = response.data;

      if (exist === true) {
        // setear login para acceder
        const user: loginUserData = {
          email: decodedToken.email,
          email_verified: decodedToken.email_verified,
        };

        await dispatch(login(user));
      } else {
        // crear en base de datos
        const userData = {
          name: decodedToken.given_name,
          lastName: decodedToken.family_name,
          email: decodedToken.email,
          image: decodedToken.picture,
          email_verified: decodedToken.email_verified,
        };

        setUserData(userData);
      }
    } catch (error: any) {
      console.error("Error:", error);
      
    }
  };

  const handlePromptMoment = (notification: PromptMomentNotification) => {
    // Manejar notificaciones de prompt si es necesario
  };

  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          promptMomentNotification={handlePromptMoment}
          useOneTap={false}
        />
      </GoogleOAuthProvider>
      {userData && <ChoiceRole userData={userData} />}
    </div>
  );
};

export default LoginGoogle;
