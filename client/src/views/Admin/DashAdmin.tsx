import { Table, Button, Row, Col } from "react-bootstrap";
import "./DahsAdmin.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [sellers, setSellers] = useState<any>([]);
  const [buyers, setBuyers] = useState<any>([]);
  const [type, setType] = useState("");

    interface Object {
        
        address: string,
        city: string,
        country: string
        document: number,
        email: string,
        id: string,
        image: string,
        lastName: string,
        name: string
        password: string
        role: string,
        state: string
        status: boolean
    }

  const handlerSeller = async () => {
    try {
      const response = await axios.get("/companies");
      setSellers(response.data);
      setType("seller");
      console.log(sellers);
      //console.log(type);
    } catch (error) {
      toast.error("No ha sido posible cargar la data");
    }
  };

  const handlerBuyer = async () => {
    try {
      const response = await axios.get("/persons");
      setBuyers(response.data);
      setType("buyer");
      console.log(buyers);
      console.log(type);

      toast.success("Data cargada satisfactoriamente");
    } catch (error) {
      toast.error("No ha sido posible cargar la data");
    }
  };
  

  return (
    <div style={{ margin: "0.5%" }}>
      <Row>
        <Col>
          <Button className="botonNav" onClick={handlerBuyer} name="buyer">
            Compradores Registrados
          </Button>
        </Col>
        <Col>
          <Button className="botonNav" onClick={handlerSeller}>
            Vendedores Registrados
          </Button>
        </Col>
      </Row>
    {type === "buyer" ? 
(      <Table striped bordered hover variant="" responsive>
        <thead className="bordeTabla">
          <tr className="bordeTabla">
            <th className="anchoTable">ID</th>
            <th className="anchoTable">Correo electrónico</th>
            <th className="anchoTable">Nombre</th>
            <th className="anchoTable">Apellidos</th>
            <th className="anchoTable">Doc Identidad</th>
            <th className="anchoTable">País</th>
            <th className="anchoTable">Status</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((person:Object) => {
            return (
              <tr>
                <td><Link to={`/admin/buyer/${person.id}`}>{person.id}</Link></td>
                <td>{person.email}</td>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>{person.document}</td>
                <td>{person.country}</td>
                <td>{person.status === true ? "Activo" : "Inactivo"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>)
       :
(       <Table>
        <thead className="bordeTabla">
       <tr className="bordeTabla">
         <th className="anchoTable">ID</th>
         <th className="anchoTable">Nombre compañía</th>
         <th className="anchoTable">Correo electrónico</th>
         <th className="anchoTable">Nombre</th>
         <th className="anchoTable">Apellidos</th>
         <th className="anchoTable">Doc Identidad</th>
         <th className="anchoTable">País</th>
         <th className="anchoTable">Status</th>
       </tr>
     </thead>
     <tbody>
       {buyers?.map((person:Object) => {
         return (
           <tr>
             <td><Link to={`/admin/seller/${person.id}`}>{person.id}</Link></td>
             <td>{person.email}</td>
             <td>{person.name}</td>
             <td>{person.lastName}</td>
             <td>{person.document}</td>
             <td>{person.country}</td>
             <td>{person.status === true ? "Activo" : "Inactivo"}</td>
           </tr>
         );
       })}
     </tbody>
       </Table>) 
       }
    </div>
  );
};

export default Administrador;
