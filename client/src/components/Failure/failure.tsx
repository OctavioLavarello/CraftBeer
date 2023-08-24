
import { useEffect } from "react";
import style from "./failure.module.css"
import { useNavigate } from "react-router-dom";


const Failure =()=>{
const navigate = useNavigate()
    useEffect(() => {
        const endpoint = "/cart"
        const redirectTimeout = setTimeout(() => {
            navigate(endpoint);
        }, 3200);
        // Limpieza del timeout en la desaparición del componente
        return () => {
            clearTimeout(redirectTimeout);
        };
    }, []);

    return (
        <>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div className={style.container}>
                    <div className={style.messageBuy}>
                        <h1>Upps!!! Tu Pago fue rechazado!! </h1>
                        <p>Por favor intenta nuevamente con otro medio de pago.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Failure