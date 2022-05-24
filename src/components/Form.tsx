import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShowTable } from "./ShowTable";

export const Form = () => {
  const [tableData, setTableData]: any = useState([]);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/formData").then((res) => {
      setTableData([res.data]);
    });
  }, []);

  const getChange = (e: any) => {
    let formData_key = e.target.id;
    setFormData({ ...formData, [formData_key]: e.target.value });
  };
  const handelSubmit = (e: any) => {
    e.preventDefault();
    axios.post("http://localhost:3000/formData", formData);
    setTimeout(() => {
      axios.get("http://localhost:3000/formData").then((res) => {
        setTableData([...tableData, res.data]);
      });
    }, 2000);
  };
  return (
    <>
      {" "}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <form
          onSubmit={handelSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            gap: "10px",
          }}
        >
          <input
            type="text"
            id="id"
            placeholder="Enter Id"
            onChange={getChange}
          />
          <input
            type="text"
            id="model"
            placeholder="Enter Model"
            onChange={getChange}
          />
          <input
            type="text"
            id="makeYr"
            placeholder="Make Year"
            onChange={getChange}
          />
          <input
            type="text"
            id="os"
            placeholder="Enter OS"
            onChange={getChange}
          />
          <input
            type="text"
            id="sh"
            placeholder="Enter Height"
            onChange={getChange}
          />
          <input
            type="text"
            id="sh"
            placeholder="Enter Widht"
            onChange={getChange}
          />
          <input
            type="text"
            id="price"
            placeholder="Enter Price"
            onChange={getChange}
          />
          <input type="submit" />
        </form>
      </div>
      <hr />
      <ShowTable {...tableData} />
    </>
  );
};
