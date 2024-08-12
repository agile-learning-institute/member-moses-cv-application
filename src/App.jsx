import { useState } from "react";
import CvDisplay from "./components/CvDisplay";
import AddPersonalDetailsForm from "./components/personal-details/AddPersonalDetailsForm";
import dataTemplate from "./dataTemplate";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState(dataTemplate.personalInfo);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <div className="app">
      <div className="edit-side">
        <div className="form-container">
          <AddPersonalDetailsForm
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
        </div>
      </div>

      <CvDisplay personalInfo={personalInfo} />
    </div>
  );
}

export default App;
