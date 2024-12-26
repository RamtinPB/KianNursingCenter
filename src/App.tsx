import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import MainLayout from "./MainLayout";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
