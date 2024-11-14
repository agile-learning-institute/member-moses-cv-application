import { useState } from "react";
import { v4 as uuid } from "uuid";
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

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  const toggleCollapse = (e) => toggleValue(e, "isCollapsed");

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleExperienceChange(e) {
    const { key } = e.target.dataset;
    const formId = e.target.closest(".section-form").id;
    const updatedExperience = experience.map((form) =>
      form.id === formId ? { ...form, [key]: e.target.value } : form
    );
    setExperience(updatedExperience);
  }

  function handleEducationChange(e) {
    const { key } = e.target.dataset;
    const formId = e.target.closest(".section-form").id;
    const updatedEducation = education.map((form) =>
      form.id === formId ? { ...form, [key]: e.target.value } : form
    );
    setEducation(updatedEducation);
  }

  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== form.id),
    });

    if (arrayName === "experiences") {
      setExperience(experience.filter((item) => item.id !== form.id));
    } else if (arrayName === "educations") {
      setEducation(education.filter((item) => item.id !== form.id));
    }
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

    if (arrayName === "experiences") {
      setExperience(
        experience.map((form) =>
          form.id === id ? { ...form, [key]: !form[key] } : form
        )
      );
    } else if (arrayName === "educations") {
      setEducation(
        education.map((form) =>
          form.id === id ? { ...form, [key]: !form[key] } : form
        )
      );
    }
  }

  function handleSave(e) {
    const formId = e.target.closest(".section-form").id;
    const isNewExperience = !experience.some((form) => form.id === formId);
    const isNewEducation = !education.some((form) => form.id === formId);

    if (isNewExperience) {
      const newForm = {
        id: formId,
        companyName: "",
        positionTitle: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        isCollapsed: true,
      };
      setExperience([...experience, newForm]);
    } else if (isNewEducation) {
      const newForm = {
        id: formId,
        degree: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
        isCollapsed: true,
      };
      setEducation([...education, newForm]);
    } else {
      const updatedExperience = experience.map((form) =>
        form.id === formId ? { ...form, isCollapsed: true } : form
      );
      setExperience(updatedExperience);

      const updatedEducation = education.map((form) =>
        form.id === formId ? { ...form, isCollapsed: true } : form
      );
      setEducation(updatedEducation);
    }
  }

  function handleAddExperience() {
    const newForm = {
      id: uuid(),
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
    };
    setExperience([...experience, newForm]);
  }

  function handleAddEducation() {
    const newForm = {
      id: uuid(),
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
    };
    setEducation([...education, newForm]);
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
            onClick={handleAddExperience}
            toggleCollapse={toggleCollapse}
            onRemove={removeForm}
            onSave={handleSave}
          />
          <EducationSection
            education={education}
            onChange={(e) => handleEducationChange(e)}
            isOpen={sectionOpen === "Education"}
            setOpen={setOpen}
            onClick={handleAddEducation}
            toggleCollapse={toggleCollapse}
            onRemove={removeForm}
            onSave={handleSave}
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
