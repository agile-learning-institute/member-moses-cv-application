import { useState } from "react";
import CvDisplay from "./components/CvDisplay";
import dataTemplate from "./dataTemplate";
import "./styles/App.css";
import ExperienceSection from "./components/experiences/ExperienceSection";
import PersonalDetailsSection from "./components/personal-details/PersonalDetailsSection";
import EducationSection from "./components/education-details/EducationSection";

function App() {
  const [personalInfo, setPersonalInfo] = useState(dataTemplate.personalInfo);
  const [experience, setExperience] = useState(
    dataTemplate.sections.experiences
  );
  const [sectionOpen, setSectionOpen] = useState("Experience"); //"Personal Info" "Education" "Experience"
  const [sections, setSections] = useState(dataTemplate.sections);
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

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          form[key] = !form[key];
        }

        return form;
      }),
    });
  }

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  const toggleCollapse = (e) => toggleValue(e, "isCollapsed");

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
          <PersonalDetailsSection
            onChange={handlePersonalInfoChange}
            personalInfo={personalInfo}
            isOpen={sectionOpen === "Personal Info"}
            setOpen={setOpen}
          />
          <ExperienceSection
            experience={experience}
            onChange={(e) => handleExperienceChange(e)}
            isOpen={sectionOpen === "Experience"}
            setOpen={setOpen}
            onClick={() => {}}
            toggleCollapse={toggleCollapse}
          />
          <EducationSection
            education={education}
            onChange={(e) => handleEducationChange(e)}
            isOpen={sectionOpen === "Education"}
            setOpen={setOpen}
            onClick={() => {}}
            toggleCollapse={toggleCollapse}
          />
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
