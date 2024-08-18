import { useState } from "react";
import CvDisplay from "./components/CvDisplay";
import AddPersonalDetailsForm from "./components/personal-details/AddPersonalDetailsForm";
import dataTemplate from "./dataTemplate";
import "./styles/App.css";
import AddExperienceForm from "./components/experiences/AddExperienceForm";

function App() {
  const [personalInfo, setPersonalInfo] = useState(dataTemplate.personalInfo);
  const [experience, setExperience] = useState(
    dataTemplate.sections.experiences
  );

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleExperienceChange(e) {
    const { key } = e.target.dataset;
    experience.map((form) => {
      setExperience({ ...form, [key]: e.target.value });
    });
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
          {experience.map((form) => (
            <AddExperienceForm
              key={form.id}
              form={form}
              onChange={handleExperienceChange}
            />
          ))}
        </div>
      </div>

      <CvDisplay personalInfo={personalInfo} experience={experience} />
    </div>
  );
}

export default App;
