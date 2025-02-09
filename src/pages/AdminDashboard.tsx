import { Button, ButtonGroup } from "@material-tailwind/react";
import { SetStateAction, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ServicesCalculator from "../components/AdminDashboard_Components/ServicesCalculator";
import SuppliesCalculator from "../components/AdminDashboard_Components/SuppliesCalculator";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("Calculator");
  const location = useLocation();
  const navigate = useNavigate();

  // Check if there is a state passed with the section to open
  useEffect(() => {
    if (location.state?.activeSection) {
      setActiveSection(location.state.activeSection);
    }
  }, [location]);

  // Function to handle setting activeSection and updating location.state
  const handleNavigation = (section: SetStateAction<string>) => {
    setActiveSection(section);
    navigate("/AdminDashboard", { state: { activeSection: section } }); // Set the state for activeSection
  };

  const renderContent = () => {
    switch (activeSection) {
      case "SuppliesCalculator":
        return <SuppliesCalculator />;
      case "ServicesCalculator":
        return <ServicesCalculator />;
      default:
        return <SuppliesCalculator />;
    }
  };

  return (
    <>
      <div className="flex flex-col bg-blue-gray-50">
        <div className="my-16 flex items-center justify-center">
          {/* @ts-ignore */}
          <ButtonGroup>
            {/* @ts-ignore */}
            <Button onClick={() => handleNavigation("SuppliesCalculator")}>
              Supplies Calculator
            </Button>
            {/* @ts-ignore */}
            <Button onClick={() => handleNavigation("ServicesCalculator")}>
              Services Calculator
            </Button>
          </ButtonGroup>
        </div>
        <>{renderContent()}</>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eceff1"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,101.3C672,107,768,181,864,224C960,267,1056,277,1152,261.3C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
