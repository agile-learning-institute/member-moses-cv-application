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
  const [sectionOpen, setSectionOpen] = useState("Personal Info");
  const [sections, setSections] = useState(dataTemplate.sections);
  const [education, setEducation] = useState(dataTemplate.sections.educations);

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  const toggleCollapse = (e) => toggleValue(e, "isCollapsed");

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleChange(e, setState, state) {
    const { key } = e.target.dataset;
    const formId = e.target.closest(".section-form").id;
    const updatedState = state.map((form) =>
      form.id === formId ? { ...form, [key]: e.target.value } : form
    );
    setState(updatedState);
  }

  function handleExperienceChange(e) {
    handleChange(e, setExperience, experience);
  }

  function handleEducationChange(e) {
    handleChange(e, setEducation, education);
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
    const isNewForm = (array) => !array.some((form) => form.id === formId);

    if (isNewForm(experience)) {
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
    } else if (isNewForm(education)) {
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
      const updateForm = (array, setArray) => {
        const updatedArray = array.map((form) =>
          form.id === formId ? { ...form, isCollapsed: true } : form
        );
        setArray(updatedArray);
      };
      updateForm(experience, setExperience);
      updateForm(education, setEducation);
    }
  }

  function handleAddForm(setState, state, newFormTemplate) {
    const newForm = { ...newFormTemplate, id: uuid(), isCollapsed: false };
    setState([...state, newForm]);
  }

  function handleAddExperience() {
    handleAddForm(setExperience, experience, {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  }

  function handleAddEducation() {
    handleAddForm(setEducation, education, {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
    });
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
