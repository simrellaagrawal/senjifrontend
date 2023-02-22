import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./components/Login/AdminLogin";
import UserLogin from "./components/Login/UserLogin";
import Register from "./components/Register/Register";
import Home from "./components/home/Home";
import DashboardHome from "./components/Dashboard/pages/DashboardHome";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UserDashboard from "./components/UserUi/UserDashboard";
import Upload from "./components/UserUi/pages/Upload";
import SingleProduct from "./components/UserUi/pages/SingleProduct";
import Payment from "./components/UserUi/pages/Payment";

function App() {
  const user = false;
  const admin = false;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<UserLogin />} />
          <Route path="/admin-login" exact element={<AdminLogin />} />
          <Route path="/admin-dashboard" exact element={<AdminDashboard />} />
          <Route path="/dashboard-home" exact element={<DashboardHome />} />
          <Route path="/dashboard" exact element={<UserDashboard />} />
          <Route path="/upload" exact element={<Upload />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/single-product" exact element={<SingleProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
