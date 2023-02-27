import "./common.css";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Producttable = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/product/");
      const data = res.data;
      console.log(data);
      setDetails(data);
      setLoading(false);
    };
    fetchDetails();
  }, []);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 580 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecelltitle">Product ID</TableCell>
            <TableCell className="tablecelltitle">Category</TableCell>
            <TableCell className="tablecelltitle">Name</TableCell>
            <TableCell className="tablecelltitle">Sell/Rent</TableCell>
            <TableCell className="tablecelltitle">Brand</TableCell>
            <TableCell className="tablecelltitle">Stock</TableCell>
            <TableCell className="tablecelltitle">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details &&
            details.map && details.map((detail, index) => {
            return (
              <TableRow
                name="tabledata"
                key={detail._id}
                // onClick={() => {
                //   handleClick(detail);
                // }}
              >
                <TableCell component="th" scope="row" className="tablecell">
                  {detail.productId}
                </TableCell>
                <TableCell className="tablecell">{detail.productCat}</TableCell>
                <TableCell className="tablecell">{detail.name}</TableCell>
                <TableCell className="tablecell">{detail.type}</TableCell>
                <TableCell className="tablecell">{detail.brand}</TableCell>
                <TableCell className="tablecell">{detail.stock}</TableCell>
                <TableCell className="tablecell">{detail.price}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Producttable;
