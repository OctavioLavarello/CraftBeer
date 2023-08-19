/// IMPORTS
import React from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../redux/reducer";
// STYLES

// ERROR VIEW
const Error: React.FC = () => {
    // LOCAL STORAGE
    const { accessLogin } = useSelector((state: AppState) => state);
    return (
        <div>
            <h1>ERROR PAGE 404</h1>
            {accessLogin.role === "" ? 
            (
                <h2>Pagina no encontrada</h2>
            ) : 
            (
                <h2>Como {accessLogin.role} no tienes acceso a esta pagina</h2>
            )
            }
        </div>
    )
}

export default Error