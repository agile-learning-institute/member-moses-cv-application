/* eslint-disable react/prop-types */
import "../../styles/Sections.css";
import ExpandCollapse from "../ExpandCollapse";
import AddExperienceForm from "./AddExperienceForm";
import Collapse from "../Collapse";

function ExperienceSection({
  isOpen,
  setOpen,
  experience,
  onChange,
  onClick,
  toggleCollapse,
  onRemove,
  onSave,
}) {
  return (
    <div className="add-experience-section section">
      <ExpandCollapse
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconName="fa-solid fa-briefcase"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        {experience.map((form) =>
          form.isCollapsed ? (
            <Collapse
              toggleCollapse={toggleCollapse}
              key={form.id}
              form={form}
              title="positionTitle"
              arrayName="experiences"
            />
          ) : (
            <AddExperienceForm
              key={form.id}
              form={form}
              onChange={onChange}
              arrayName="experiences"
              save={onSave}
              remove={onRemove}
            />
          )
        )}

        <button className="create-form" onClick={onClick}>
          <i className="fa-solid fa-plus" />
          Add Experience
        </button>
      </div>
    </div>
  );
}

export default ExperienceSection;
