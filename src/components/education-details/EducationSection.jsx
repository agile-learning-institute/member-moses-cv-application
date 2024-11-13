/* eslint-disable react/prop-types */
import "../../styles/Sections.css";
import ExpandCollapse from "../ExpandCollapse";
import AddEducationForm from "./AddEducationForm";
import Collapse from "../Collapse";

function EducationSection({
  isOpen,
  setOpen,
  education,
  onChange,
  onClick,
  toggleCollapse,
}) {
  return (
    <div className="add-education-section section">
      <ExpandCollapse
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa-solid fa-graduation-cap"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        {education.map((form) =>
          form.isCollapsed ? (
            <Collapse
              toggleCollapse={toggleCollapse}
              key={form.id}
              form={form}
              title="degree"
            />
          ) : (
            <AddEducationForm key={form.id} form={form} onChange={onChange} />
          )
        )}

        <button className="create-form" onClick={onClick}>
          <i className="fa-solid fa-plus" />
          Add Education
        </button>
      </div>
    </div>
  );
}

export default EducationSection;
