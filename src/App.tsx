import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import MainLayout from "./MainLayout";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
