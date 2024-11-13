/* eslint-disable react/prop-types */
import "../../styles/Sections.css";
import ExpandCollapse from "../ExpandCollapse";
import AddPersonalDetailsForm from "./AddPersonalDetailsForm";

function PersonalDetailsSection({ isOpen, setOpen, personalInfo, onChange }) {
  return (
    <div className="add-personal-details-section section">
      <ExpandCollapse
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Personal Info"
        iconName="fa-solid fa-user-plus"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <AddPersonalDetailsForm
          onChange={onChange}
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
      </div>
    </div>
  );
}

export default PersonalDetailsSection;
