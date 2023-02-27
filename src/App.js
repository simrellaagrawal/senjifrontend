import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./components/Login/AdminLogin";
import UserLogin from "./components/Login/UserLogin";
import Register from "./components/Register/Register";
import DashboardHome from "./components/Dashboard/pages/DashboardHome";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UserDashboard from "./components/UserUi/UserDashboard";
import Upload from "./components/UserUi/pages/Upload";
import SingleProduct from "./components/UserUi/pages/SingleProduct";
import Payment from "./components/UserUi/pages/Payment";
import ContactUs from "./components/Contact/ContactUs";
import About from "./components/AboutUs/About";
import Tnc from "./components/Tnc/Tnc";
import { useContext } from "react";
import Yourproduct from "./components/UserUi/pages/Yourproduct";
import HomePage from "./components/home/HomePage";
import UserTable from "./components/Dashboard/common/UserTable";
import Producttable from "./components/Dashboard/common/Producttable";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<UserLogin />} />
          <Route path="/admin-login" exact element={<AdminLogin />} />
          {/* <Route path="/admin-dashboard" exact element={<AdminDashboard />} /> */}
          <Route path="/admin-dashboard" exact element={<DashboardHome />} />
          <Route path="/dashboard" exact element={<UserDashboard />} />
          <Route path="/upload" exact element={<Upload />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/terms&conditions" exact element={<Tnc />} />
          <Route path="/your-product" exact element={<Yourproduct />} />
          <Route path="/users" exact element={<UserTable />} />
          <Route path="/products" exact element={<Producttable />} />
          <Route path="/single-product" exact element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
