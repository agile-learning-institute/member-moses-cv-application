/* eslint-disable react/prop-types */
import Buttons from "../Buttons";
import InputComponent from "../InputComponent";

function AddEducationForm({ form, onChange, arrayName, save, remove }) {
  const { degree, schoolName, location, startDate, endDate, id } = form;

  return (
    <form
      className="education-form section-form"
      id={id}
      data-array-name={arrayName}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputComponent
        type="text"
        id="school-name"
        labelText="School"
        placeholder="Enter school / university"
        value={schoolName}
        onChange={onChange}
        dataId="schoolName"
        required
      />
      <InputComponent
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree / Field Of Study"
        value={degree}
        onChange={onChange}
        dataId="degree"
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
      <Buttons save={save} remove={remove} />
    </form>
  );
}

export default AddEducationForm;
