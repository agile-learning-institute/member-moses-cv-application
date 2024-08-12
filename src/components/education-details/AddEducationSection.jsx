/* eslint-disable react/prop-types */
import DisplayForms from "../DisplayForms";
import ExpandSection from "../ExpandSection";
import CreateForm from "../CreateForm";
import "../../styles/Section.css";
import AddEducationForm from "./AddEducationForm";

function AddEducationSection({
  educations,
  onChange,
  createForm,
  onCancel,
  onRemove,
}) {
  return (
    <div className="add-education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa-solid fa-graduation-cap"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={educations}
          FormComponent={AddEducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="educations"
        />

        <CreateForm onClick={createForm} buttonText="Education" />
      </div>
    </div>
  );
}

export default AddEducationSection;
