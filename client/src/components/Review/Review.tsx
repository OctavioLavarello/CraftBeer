
import { useState } from "react"
import style from "./Review.module.css"
import { Rating } from 'react-simple-star-rating'
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
import axios from "axios";

interface ReviewProps {
    name: string;
    isReview: boolean;
    setisReview: React.Dispatch<React.SetStateAction<boolean>>;
    id: string
}
interface Review {
    rate: number,
    userPersonId: string,
    productId: string,
    comment: string
}



const Review = ({ name, isReview, setisReview, id }: ReviewProps) => {


    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate: any) => {
        setRating(rate)
    }

    const [isReviewModal, setisReviewModal] = useState(isReview);



    //input comentario 
    const [comentInput, setComentInput] = useState("")

    const handlerInput = (event: any) => {
        setComentInput(event.target.value)
    }


    // data para enviar Review !!! 
    const userID = useSelector((state: AppState) => state.accessLogin.id)
    const dataReview: Review = {
        rate: rating,
        userPersonId: userID,
        productId: id,
        comment: comentInput
    }

    const sendInfo = async () => {
        const endpoint = "/qualification"
       
        
        try {
            await axios.post(endpoint, dataReview)
        } catch (error) {
            console.error(error);
        }
        console.log(dataReview);
        setisReviewModal(false);
        setisReview(false)
    }



    return (
        <>
            {isReviewModal ? (
                <>
                    <div className={style.backdrop}></div>

                    <div className={style.modal}>
                        <h4>Puntuar este producto</h4>
                        <h6>{name}</h6>
                        <div className={style.container}>
                            <Rating
                                onClick={handleRating}
                                rating={rating}
                                size={30}
                                label
                                transition
                                fillColor='orange'
                                emptyColor='gray'
                                className='foo'
                            />
                        </div>
                        <input type="text" className={style.inputModal} placeholder="Agrega un comentario....." onChange={handlerInput} value={comentInput} />
                        <button className={style.buttonModal} onClick={sendInfo} disabled={!rating}>Send</button>
                    </div>

                </>
            ) : <></>
            }
        </>

    )
}

export default Review