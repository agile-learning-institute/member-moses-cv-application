/* eslint-disable react/prop-types */
import "../../styles/CvExperience.css";

function CvExperience({ props }) {
  return (
    <div className="experience-info">
      <div className="experience-info-group">
        <p className="dates">
          {props.startDate}
          {props.startDate && props.endDate && <span> – </span>}
          {props.endDate}
        </p>
        <p>{props.location}</p>
      </div>

      <div className="experience-info-group">
        <p className="experience-info-companyName">{props.companyName}</p>
        <p className="experience-info-positionTitle">{props.positionTitle}</p>
        <p className="experience-info-description">{props.description}</p>
      </div>
    </div>
  );
}

export default CvExperience;
