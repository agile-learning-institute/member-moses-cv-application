/* eslint-disable react/prop-types */

import "../styles/CvDisplay.css";
import CvEducation from "./education-details/CvEducation.jsx";
import CvExperience from "./experiences/CvExperience.jsx";
import CvPersonalDetails from "./personal-details/CvPersonalDetails.jsx";

function CvDisplay({ personalInfo, experience, education }) {
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
          <h3 className="header-text">Education</h3>
          {education.map((form) => (
            <CvEducation key={form.id} props={form} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CvDisplay;
