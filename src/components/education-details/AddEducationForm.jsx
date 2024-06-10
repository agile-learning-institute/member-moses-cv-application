/* eslint-disable react/prop-types */
import Buttons from "../Buttons";
import InputComponent from "../InputComponent";

function AddEducationForm(props) {
//   const { degree, schoolName, location, startDate, endDate, id } = props.form;
const {
    form: {
      degree,
      schoolName,
      location,
      startDate,
      endDate,
      id
    } = {}
  } = props;

  const { onChange, save, remove } = props;

  return (
    <form
      className="education-form section-form"
      id={id}
      data-array-name="educations"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputComponent
        type="text"
        id="school-name"
        labelText="School"
        placeholder="Enter school / university"
        value={schoolName}
        onChange={onChange}
        data-key="schoolName"
        required
      />
      <InputComponent
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree / Field Of Study"
        value={degree}
        onChange={onChange}
        data-key="degree"
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

      <Buttons save={save} remove={remove} />
    </form>
  );
}

export default AddEducationForm;
