/* eslint-disable react/prop-types */
import "../../styles/CvEducation.css";

function CvEducation({ props }) {
  return (
    <div className="education-info">
      <div className="education-info-group">
        <p className="dates">
          {props.startDate}
          {props.startDate && props.endDate && <span> – </span>}
          {props.endDate}
        </p>
        <p>{props.location}</p>
      </div>

      <div className="education-info-group">
        <p className="education-info-schoolName">{props.schoolName}</p>
        <p className="education-info-degree">{props.degree}</p>
      </div>
    </div>
  );
}

export default CvEducation;
