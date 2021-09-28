import React from "react";
//import { Form } from "react-bootstrap";
import { updateInterval } from "../services/api";

export default function Interval({ interval, id, iLabel }) {
  const handleChange = (e) => {
    e.preventDefault();
    updateInterval(id, { value: Number(e.target.value) });
  };

  return (
    <>
      <div className="col-1">
        <label>{iLabel}</label>
      </div>
      <div className="col-4">
        <input
          
          className="form-control"
          type="number"
          placeholder={interval}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
