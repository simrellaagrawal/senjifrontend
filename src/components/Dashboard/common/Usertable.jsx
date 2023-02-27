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
import AdminNav from "../AdminDashboard";
const UserTable = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/admin/");
      const data = res.data;
      // console.log(data);
      setDetails(data);
      setLoading(false);
    };
    fetchDetails();
  }, []);
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 580 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tablecelltitle">S.No.</TableCell>
              <TableCell className="tablecelltitle">Customer Name</TableCell>
              <TableCell className="tablecelltitle">Phone Number</TableCell>
              <TableCell className="tablecelltitle">Sell/Rent/Buy</TableCell>
              {/* <TableCell className="tablecelltitle">Product</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {details &&
              details.map &&
              details.map((detail, index) => {
                return (
                  <TableRow
                    name="tabledata"
                    key={detail._id}
                    // onClick={() => {
                    //   handleClick(detail);
                    // }}
                  >
                    <TableCell component="th" scope="row" className="tablecell">
                      {index + 1}
                    </TableCell>
                    <TableCell className="tablecell">
                      {detail.username}
                    </TableCell>
                    <TableCell className="tablecell">+{detail.phone}</TableCell>
                    <TableCell className="tablecell">Sell</TableCell>
                    {/* <TableCell className="tablecell">table</TableCell> */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
