//import React from 'react';
import { Button } from "react-bootstrap";

interface Props{
  onImageUpload: () => void;
  dragProps: any;
  isDragging: boolean
}

export const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }:Props) => {
    return (
      <div
        onClick={onImageUpload}
        {...dragProps}
        className={`container-dnd center-flex ${isDragging ? 'isDragging' : ''}`}
      >
        <Button style={{width:"100%", height:"100%", textAlign:"left", backgroundColor:"#A37D34", border: "none", boxShadow:"5px 5px 10px black"}} >Seleccione la imagen</Button>
      </div>
    )
  }