/* eslint-disable react/prop-types */

import "../styles/CvDisplay.css";
import CvExperience from "./experiences/CvExperience.jsx";
import CvPersonalDetails from "./personal-details/CvPersonalDetails.jsx";

function CvDisplay({ personalInfo, experience }) {
  return (
    <div className="resume-container">
      <div className="resume">
        <CvPersonalDetails
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
        <div className="resume-section">
          <h3 className="header-text">Work Experience</h3>
          {experience.map((form) => (
            <CvExperience key={form.id} props={form} />
          ))}
          <p>Education</p>
        </div>
      </div>
    </div>
  );
}

export default CvDisplay;
