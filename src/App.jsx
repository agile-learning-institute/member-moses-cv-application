import { useState } from "react";
import CvDisplay from "./components/CvDisplay";
import AddPersonalDetailsForm from "./components/personal-details/AddPersonalDetailsForm";
import dataTemplate from "./dataTemplate";
import "./styles/App.css";
import AddExperienceForm from "./components/experiences/AddExperienceForm";
import AddEducationForm from "./components/education-details/AddEducationForm";

function App() {
  const [personalInfo, setPersonalInfo] = useState(dataTemplate.personalInfo);
  const [experience, setExperience] = useState(
    dataTemplate.sections.experiences
  );
  const [education, setEducation] = useState(dataTemplate.sections.educations);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleExperienceChange(e) {
    const { key } = e.target.dataset;
    const updatedExperience = experience.map((form) =>
      form.id === e.target.form.id ? { ...form, [key]: e.target.value } : form
    );
    setExperience(updatedExperience);
  }

  function handleEducationChange(e) {
    const { key } = e.target.dataset;
    const updatedEducation = education.map((form) =>
      form.id === e.target.form.id ? { ...form, [key]: e.target.value } : form
    );
    setEducation(updatedEducation);
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
              onChange={(e) => handleExperienceChange(e)}
            />
          ))}
          {education.map((form) => (
            <AddEducationForm
              key={form.id}
              form={form}
              onChange={(e) => handleEducationChange(e)}
            />
          ))}
        </div>
      </div>

      <CvDisplay
        personalInfo={personalInfo}
        experience={experience}
        education={education}
      />
    </div>
  );
}

export default App;
