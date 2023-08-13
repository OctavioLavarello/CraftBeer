//import React from 'react';
import { Button } from "react-bootstrap";

interface Props {
  loading: boolean;
  img: string;
  onUpload: () => Promise<void>;
  onImageRemove: (index: number) => void;
  onImageUpdate: (index: number) => void;
}

export const ImageSelected = ({
  img,
  loading,
  onUpload,
  onImageRemove,
  onImageUpdate,
}: Props) => {
  return (
    <div>
      <img
        className="image-selected"
        src={img}
        alt="image-selected"
        width={300}
      />
      <div>
        {loading ? (
          <p className="loading-label">Cargando imagen⏳...</p>
        ) : (
          <div style={{display:"flex", flex:"row"}}>
            <Button style={{width:"33%", height:"100%", textAlign:"left", backgroundColor:"#A37D34", border: "none", boxShadow:"5px 5px 10px black"}} disabled={loading} onClick={onUpload}>
              Cargar 📤
            </Button>
            <Button style={{
              margin:"1px",
              width:"33%", height:"100%", textAlign:"left", backgroundColor:"#A37D34", border: "none", boxShadow:"5px 5px 10px black"}} disabled={loading} onClick={() => onImageUpdate(0)}>
              Cambiar✏️
            </Button>
            <Button style={{width:"33%", height:"100%", textAlign:"left", backgroundColor:"#A37D34", border: "none", boxShadow:"5px 5px 10px black"}} disabled={loading} onClick={() => onImageRemove(0)}>
              Cancelar❌
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
