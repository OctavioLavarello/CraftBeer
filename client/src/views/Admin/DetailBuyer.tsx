import {
  Card,
  Row,
  Col,
  Button,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import "./DahsAdmin.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const DetailBuyer: React.FC = () => {
  const navigate = useNavigate()
  const id = useSelector((state: AppState) => state.idBuyer);
  console.log(id);
  
  const [infoUser, setInfoUser] = useState<any>({});

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/persons/admin/${id}`);
      setInfoUser(response.data);
    };
    solicitud();
  }, [id, infoUser]);

  const handlerActive = async ()=>{
    try {
      await axios.put("/user", {id: infoUser.id, status: "true"})
      toast.success("User has been activated")
    } catch (error) {
      toast.error("It was not possible to activate the user")
    }
  }

  const handlerInactive = async ()=>{
    try {
      await axios.put("/user", {id: infoUser.id, status: "false"})
      toast.success("User has been inactivated")
    } catch (error) {
      toast.error("It was not possible to inactivate the user")
    }
  }

  const historyShop =(eventKey:any)=>{
  if(eventKey === "1")  navigate(`/admin/buyer/adminHistoryShopBuyer`)
  if(eventKey === "2")  navigate(`/admin/buyer/adminUserModify`)
  }

  return (
    <div className="bodyBuyer">
      <Card
        style={{
          width: "70%",
          height: "600px",
          margin: "1%",
          border: "solid black",
        }}
      >
        <div
          style={{
            textAlign: "center",
            borderBottom: "solid black 5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            
          }}
        >
          <NavbarBrand>
            <h2>{`${infoUser.name}, ${infoUser.lastName}`}</h2>
          </NavbarBrand>
          <NavDropdown title="Otras opciones" menuVariant="dark" onSelect={historyShop}>
            <NavDropdown.Item  eventKey="1">Purchase history</NavDropdown.Item>
            <NavDropdown.Item eventKey="2">Edit user</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "80%" }}>
            Name
            <input type="text" className="inputBuyer" value={infoUser.name} />
          </Col>
          <Col style={{ width: "50%", height: "80%" }}>
            Last Name
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.lastName}
            />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "80%" }}>
            State
            <input type="text" className="inputBuyer" value={infoUser.state} />
          </Col>
          <Col style={{ width: "50%", height: "80%" }}>
            Country
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.country}
            />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "80%" }}>
            Identity card
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.document}
            />
          </Col>
          <Col style={{ width: "50%", height: "80%" }}>
            User type
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.role}
            />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "80%" }}>
            City
            <input type="text" className="inputBuyer" value={infoUser.city} />
          </Col>
          <Col style={{ width: "50%", height: "80%" }}>
            Email
            <input type="text" className="inputBuyer" value={infoUser.email} />
          </Col>
        </Row>
        <div className="botonesBuyer">
            <Link to="/admin" style={{width:"30%", height:"50%"}}>
              <Button style={{width:"100%", backgroundColor:"#A37D34", border:"none"}}>Back to panel</Button>
            </Link>
          <Button onClick={handlerActive} style={{width:"15%", height:"50%", backgroundColor:"black", border:"none"}}>Activate User</Button>
          <Button onClick={handlerInactive} style={{width:"15%", height:"50%",backgroundColor:"black", border:"none"}}>Inactivate User</Button>
        </div>
      </Card>
      <div className="bodyImage">
        <Card
          style={{
            height: "50%",
            width: "90%",
            margin: "1%",
            border: "solid black 3px",
          }}
        >
          {infoUser.image === null ? "Image not available" : (<img src={infoUser.image} alt={infoUser.name} style={{height:"100%", width:"100%"}}/>)}
        </Card>
        <Card
          style={{
            border: "solid black 3px",
            height: "40%",
            width: "90%",
            margin: "1%",
            alignContent:"center",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <h4>User Status</h4>
          {infoUser.status === true ? (
            <h2 className="activoUser">Active ✅</h2>) : (
            <h2 className="inactiveUser">Inactive 🚫</h2>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DetailBuyer;
