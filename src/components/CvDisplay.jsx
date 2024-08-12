/* eslint-disable react/prop-types */

import "../styles/CvDisplay.css";
import CvPersonalDetails from "./personal-details/CvPersonalDetails.jsx";

function CvDisplay({ personalInfo }) {
  return (
    <div className="resume-container">
      <div className="resume">
        <CvPersonalDetails
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
        <div>
          <p>Experience</p>
          <p>Education</p>
        </div>
      </div>
    </div>
  );
}

export default CvDisplay;
