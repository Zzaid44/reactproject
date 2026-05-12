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
function App() {
  return (
    <>
    <Toaster/>
      <Navbar />
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/suv" element={<SuvList />} />
        <Route path="/sedan" element={<SedanList />} />
        <Route path="/luxury" element={<LuxuryList />} />
        <Route path="/caravan" element={<CaravanList />} />
        <Route path="/register" element={<Register />} />

        
      </Routes>

     

      
    </>
  );
}

export default App;
