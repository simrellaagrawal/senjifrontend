import React from "react";
import "../dashboard.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SellIcon from "@mui/icons-material/Sell";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import EnhancedTable from "../common/Usertable";
import Dashboardtable from "../common/Dashboardtable";
import Producttable from "../common/Producttable";

function DashboardHome() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    {
      name: "Page A",
      Rent: 4000,
      Sell: 2400,
    },
    {
      name: "Page B",
      Rent: 3000,
      Sell: 1398,
    },
    {
      name: "Page C",
      Rent: 2000,
      Sell: 9800,
    },
    {
      name: "Page D",
      Rent: 2780,
      Sell: 3908,
    },
    {
      name: "Page E",
      Rent: 1890,
      Sell: 4800,
    },
    {
      name: "Page F",
      Rent: 2390,
      Sell: 3800,
    },
    {
      name: "Page G",
      Rent: 3490,
      Sell: 4300,
    },
  ];

  return (
    <>
      <div className="dashboard">
        {/* <Container> */}
        <Row>
          <Col lg={3}>
            <div className="box">
              <p>Sellers</p>
              <h4>526</h4>
              <div className="box-bottom">
                <a href="#">View Sellers</a>
                <SellIcon />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <p>Buyers</p>
              <h4>526</h4>
              <div className="box-bottom">
                <a href="#">View Buyers</a>
                <ShoppingBagIcon />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <p>Products</p>
              <h4>526</h4>
              <div className="box-bottom">
                <a href="#">View Products</a>
                <Inventory2Icon />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="box">
              <p>Revenue</p>
              <h4>526</h4>
              <div className="box-bottom">
                <a href="#">View Revenue</a>
                <CurrencyRupeeIcon />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="charts">
          <Col lg={7}>
            <div className="area-chart">
              <div className="area-top">
                <p>Users</p>
                <hr />
              </div>
              <AreaChart
                className="area"
                width={700}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </div>
          </Col>
          <Col lg={5}>
            <div className="area-chart">
            <div className="area-top">
                <p>Products</p>
                <hr />
              </div>
              <BarChart width={470} height={250} data={data1} className="area">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Rent" fill="#8884d8" />
                <Bar dataKey="Sell" fill="#82ca9d" />
              </BarChart>
            </div>
          </Col>
        </Row>
        <Row className="dashtables">
          <Col lg={6}>
            <div className="dashtable">
            <div className="area-top">
                <p>Users</p>
                <hr />
              </div>
              <Dashboardtable />
            </div>
          </Col>
          <Col lg={6}>
            <div className="dashtable">
            <div className="area-top">
                <p>Products</p>
                <hr />
              </div>
              <Producttable />
            </div>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    </>
  );
}

export default DashboardHome;
