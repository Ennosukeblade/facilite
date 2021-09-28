import React from "react";
//import {Form, FormLabel} from 'react-bootstrap'
import { updateValue } from "../services/api";

export default function Percent({ percent, ide, mlabel }) {
  const handleChange = (e) => {
    e.preventDefault();

    updateValue(ide, { value: Number(e.target.value) });
  };
  return (
    <div className="col">
      
        <label className="form-label">{mlabel}</label>
    
        <input className="form-control" type="number" placeholder={percent} onChange={handleChange} />
      
    </div>
  );
}
