/// IMPORTS
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
// COMPONENTS
import { DragAndDrop } from "../../components/Cloudinary/Cloudinary.tsx";
// STYLES
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./PutProduct.module.css";
import { toast } from "react-hot-toast";

// PUT BEER
interface putBeer {
    companyId: string;
    id: string;
    name: string;
    description: string;
    presentation: string;
    qualification: string;
    type: string;
    price: number;
    ABV: number;
    IBU: number;
    stock: number;
    status: boolean;
    image: string;
}
const PutProduct = () => {
    // GLOBAL STATE
    const { urlImage, accessLogin } = useSelector((state: AppState) => state);
    // LOCAL STATE
    const [putBeer, setPutBeer] = useState<putBeer>({
        companyId: accessLogin.id,
        id: "",
        name: "",
        description: "",
        presentation: "",
        qualification: "",
        type: "",
        price: 0,
        ABV: 0,
        IBU: 0,
        stock: 0,
        status: false,
        image: "",
    });
    console.log(putBeer)
    const [isLoading, setIsLoading] = useState(true);
    // HANDLERS
    const { id } = useParams();
    const navigate = useNavigate();
    const handlerOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPutBeer((prevPutBeer) => ({
            ...prevPutBeer,
            [name]: value
        }));
    };
    const handlerOnChangeSelect = (event: any) => {
        const { name, value } = event.target;
        setPutBeer((prevPutBeer) => ({
            ...prevPutBeer,
            [name]: value
        }));
    };
    const handlerOnChangeNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPutBeer((prevPutBeer) => ({
        ...prevPutBeer,
        [name]: Number(value)
    }));
    };
    const handlerTextareaOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setPutBeer((prevPutBeer) => ({
            ...prevPutBeer,
            [name]: value
        }));
    };
    const handlerOnChangeBool = (event: any) => {
        const { name, value } = event.target;
        if (value === "true"){
            setPutBeer((prevPutBeer) => ({
                ...prevPutBeer,
                [name]: true
            }));
        } else {
            setPutBeer((prevPutBeer) => ({
                ...prevPutBeer,
                [name]: false
            }));
        }
    };
    const handlerOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          await axios.put(`/product/${id}`, putBeer)
          toast.success("Save beer change successfully")
        } catch (error: any) {
          if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
          toast.error("an error occurred while save changes");
          }
        }
    };
    // USE EFFECT
    useEffect(() => {
        if (urlImage) {
            setPutBeer((prevPutBeer) => ({
                ...prevPutBeer,
                image: urlImage
            }));
        }
    }, [urlImage]);
    useEffect(() => {
        const fetchBeer = async () => {
        try {
            const { data } = await axios.get(`/product/${id}`);
            console.log("DATA",data);
            const updatedPutBeer = { ...putBeer, ...data };
            setPutBeer(updatedPutBeer);
        } catch (error) {
            console.log(error);
            console.error("Error fetching beer", error);
        } finally {
            setTimeout(() => {
            setIsLoading(false);
            }, 2000);
        }
        };
        fetchBeer();
    }, []);
    if (isLoading) {
        return (
        <div className={styles.containLoading}>
            <img
            className={styles.beerLoading}
            src="https://4.bp.blogspot.com/-646VVaYA-bg/WPHrAyqN7YI/AAAAAAAADjI/7lAJmMNHpm4vCT49MlX51SBPDzlrx0MFACLcB/s1600/aa2.gif"
            alt=""
            />
        </div>
        );
    }
    if (!putBeer) {
        return (
        <div className={styles.notFound}>
            <div>¡Producto no encontrado!</div>
            <Button
            variant="danger"
            onClick={() => navigate(-1)}
            className={styles.buttonback}
            >
            Volver
            </Button>
        </div>
        );
    }
    console.log("PutBeer: ", putBeer)
    return (
        <Container className={styles.container}>
            <Row>
                <Col md={5}>
                    <form onSubmit={handlerOnSubmit}>
                        <Card className={`${styles.card} h-100 d-flex`}>
                        <Card.Body className="flex-column">
                            <Card.Text className="flex-grow-1">Name</Card.Text>
                            <input 
                            required
                            type="text" 
                            name="name"
                            value={putBeer.name}
                            className={styles.input}
                            onChange={handlerOnChange}
                            />
                            <Card.Text className="flex-grow-1">Description</Card.Text>
                            <textarea
                            required 
                            name="description"
                            value={putBeer.description}
                            className={styles.message}
                            onChange={handlerTextareaOnChange}
                            />
                            <Card.Text className="flex-grow-1">Type</Card.Text>
                            <select 
                            name="type"
                            className={styles.input}
                            onChange={handlerOnChangeSelect} 
                            >
                                <option value="" >{putBeer.type}</option>
                                <option value="Lager">Lager</option>
                                <option value="Ale">Ale</option>
                                <option value="IPA">IPA</option>
                                <option value="Stout">Stout</option>
                                <option value="Porter">Porter</option>
                                <option value="Wheat Beer">Wheat Beer</option>
                                <option value="Sour Beer">Sour Beer</option>
                                <option value="Belgian Strong Ale">Belgian Strong Ale</option>
                                <option value="Pilsner">Pilsner</option>
                                <option value="Amber Ale">Amber Ale</option>
                                <option value="Barleywine">Barleywine</option>
                                <option value="Saison">Saison</option>
                                <option value="Rauchbier">Rauchbier</option>
                                <option value="Bock">Bock</option>
                                <option value="Scotch Ale">Scotch Ale</option>
                            </select>
                            <Card.Text className="flex-grow-1">Presentation</Card.Text>
                            <input 
                            required
                            type="text" 
                            name="presentation"
                            value={putBeer.presentation}
                            className={styles.input}
                            onChange={handlerOnChange}
                            />
                            <Card.Text className="flex-grow-2">ABV</Card.Text>
                            <input 
                            required
                            type="text" 
                            name="ABV"
                            value={putBeer.ABV}
                            className={styles.input}
                            onChange={handlerOnChangeNum}
                            />
                            %
                            <Card.Text className="flex-grow-2">IBU</Card.Text>
                            <input 
                            required
                            type="text" 
                            name="IBU"
                            value={putBeer.IBU}
                            className={styles.input}
                            onChange={handlerOnChangeNum}
                            />
                            <Card.Text className="flex-grow-1">Price</Card.Text>
                            $
                            <input 
                            required
                            type="number" 
                            step="0.01"
                            name="price"
                            value={putBeer.price}
                            className={styles.input}
                            onChange={handlerOnChangeNum}
                            />
                            <Card.Text className="flex-grow-1">Stock</Card.Text>
                            <input 
                            required
                            type="text" 
                            name="stock"
                            value={putBeer.stock}
                            className={styles.input}
                            onChange={handlerOnChangeNum}
                            />
                             Units
                            <Card.Text className="flex-grow-1">Status</Card.Text>
                            <select 
                            name="status" 
                            className={styles.input}
                            onChange={handlerOnChangeBool}>
                                <option value="true">Available</option>
                                <option value="false">Unavailable</option>
                            </select>
                            <Card.Text className="flex-grow-1">Image</Card.Text>
                            <DragAndDrop/>
                        </Card.Body>
                        <button
                        className={styles.buttonSub}
                        >
                            Save Changes
                        </button>
                        </Card>
                    </form>
                    <Button
                        onClick={() => navigate(-1)}
                        className={styles.buttonback}
                        >
                        Volver
                    </Button>
                </Col>
                <Col md={7} className={styles.imageContainer}>
                    <img 
                    src={putBeer.image} 
                    alt="" 
                    className={styles.image} 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default PutProduct;
