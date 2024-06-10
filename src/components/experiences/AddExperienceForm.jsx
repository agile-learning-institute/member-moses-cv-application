/* eslint-disable react/prop-types */
import Buttons from "../Buttons";
import InputComponent from "../InputComponent";

function AddExperienceForm(props) {
//   const { companyName, positionTitle, location, description, startDate, endDate, id } = props.form;
const {
    form: {
      companyName,
      positionTitle,
      location,
      description,
      startDate,
      endDate,
      id
    } = {}
  } = props;

  const { onChange, save, remove } = props;

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
        data-key="companyName"
        required
      />
      <InputComponent
        type="text"
        id="position-title"
        labelText="Position Title"
        placeholder="Enter Position Title"
        value={positionTitle}
        onChange={onChange}
        data-key="positionTitle"
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
          data-key="startDate"
        />
        <InputComponent
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>
      <InputComponent
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={location}
        onChange={onChange}
        data-key="location"
        optional
      />
      <InputComponent
        type="textarea"
        id="description"
        labelText="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onChange}
        data-key="description"
        optional
      />
      <Buttons save={save} remove={remove} />
    </form>
  );
}

export default AddExperienceForm;