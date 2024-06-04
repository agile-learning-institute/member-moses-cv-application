import InputComponent from "../InputComponent";
import '../../styles/AddPersonalDetailsForm.css';

// eslint-disable-next-line react/prop-types
function AddPersonalDetailsForm({ onChange, email, fullName, phoneNumber, address }) {
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
          data-key="fullName"
          required
        />
        <InputComponent
          type="email"
          id="email"
          labelText="Email"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
          data-key="email"
          required
        />
        <InputComponent
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={onChange}
          data-key="phoneNumber"
          optional
        />
        <InputComponent
          type="text"
          id="address"
          labelText="Address"
          placeholder="City, Country"
          value={address}
          onChange={onChange}
          data-key="address"
          required
        />
      </form>
    </>
  );
}

export default AddPersonalDetailsForm;
