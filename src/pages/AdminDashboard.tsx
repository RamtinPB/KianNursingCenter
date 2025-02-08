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
        <div className="my-10 flex items-center justify-center">
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
    </>
  );
}
