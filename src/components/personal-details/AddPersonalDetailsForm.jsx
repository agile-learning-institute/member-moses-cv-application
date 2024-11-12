/* eslint-disable react/prop-types */
import InputComponent from "../InputComponent.jsx";
import "../../styles/AddPersonalDetailsForm.css";

function AddPersonalDetailsForm({
  onChange,
  fullName,
  email,
  phoneNumber,
  address,
}) {
  return (
    <>
      <form action="#" className="personal-details">
        <h2>Personal Details</h2>
        <InputComponent
          type="text"
          id="full-name"
          labelText="Full name"
          placeholder="First and last name"
          value={fullName}
          onChange={onChange}
          dataId="fullName"
          required
        />
        <InputComponent
          type="email"
          id="email"
          labelText="Email"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
          dataId="email"
          required
        />
        <InputComponent
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={onChange}
          dataId="phoneNumber"
          optional
        />
        <InputComponent
          type="text"
          id="address"
          labelText="Address"
          placeholder="City, Country"
          value={address}
          onChange={onChange}
          dataId="address"
          required
        />
      </form>
    </>
  );
}

export default AddPersonalDetailsForm;
