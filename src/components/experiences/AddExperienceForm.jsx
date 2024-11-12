/* eslint-disable react/prop-types */
import InputComponent from "../InputComponent.jsx";
import "../../styles/AddExperienceForm.css";

function AddExperienceForm({ form, onChange }) {
  const {
    companyName,
    positionTitle,
    location,
    description,
    startDate,
    endDate,
    id,
  } = form;

  return (
    <form
      className="experience-form section-form"
      id={id}
      data-array-name="experiences"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputComponent
        type="text"
        id="company-name"
        labelText="Company Name"
        placeholder="Enter Company Name"
        value={companyName}
        onChange={onChange}
        dataId="companyName"
        required
      />
      <InputComponent
        type="text"
        id="position-title"
        labelText="Position Title"
        placeholder="Enter Position Title"
        value={positionTitle}
        onChange={onChange}
        dataId="positionTitle"
        required
      />
      <div className="dates-group">
        <InputComponent
          type="text"
          id="date"
          labelText="Start Date"
          placeholder="Enter Start Date"
          value={startDate}
          onChange={onChange}
          dataId="startDate"
        />
        <InputComponent
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={endDate}
          onChange={onChange}
          dataId="endDate"
        />
      </div>
      <InputComponent
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={location}
        onChange={onChange}
        dataId="location"
        optional
      />
      <InputComponent
        type="textarea"
        id="description"
        labelText="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onChange}
        dataId="description"
        optional
      />
    </form>
  );
}

export default AddExperienceForm;
