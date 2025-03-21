import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MainLayout from "./MainLayout";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import SignUp from "./pages/SignUp";

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
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
