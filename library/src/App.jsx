import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/Pages/Landing/LandingPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import SuvList from "./Components/Menu/MenuCards/SuvList.jsx";
import SedanList from "./Components/Menu/MenuCards/SedanList.jsx";
import LuxuryList from "./Components/Menu/MenuCards/LuxuryList.jsx";
import CaravanList from "./Components/Menu/MenuCards/CaravanList.jsx";
import Register from "./Components/Auth/Register.jsx";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Auth/Login.jsx";

import Footer from "./Components/Footer/Footer.jsx";
import UserDashboardPage from "./Components/Pages/Landing/User/UserDashboardPage.jsx";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
import AboutUs from "./Components/aboutus/Aboutus.jsx";
function App() {
  return (
    <>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/suv" element={<SuvList />} />
        <Route path="/sedan" element={<SedanList />} />
        <Route path="/luxury" element={<LuxuryList />} />
        <Route path="/caravan" element={<CaravanList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userdashboard" element={<UserDashboardPage />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
