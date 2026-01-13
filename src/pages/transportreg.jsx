import React, { useState } from "react";
import "./transportreg.css";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    gstin: "",
    vehicleType: "",
    numVehicles: "",
    region: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.companyName.trim()) 
        newErrors.companyName = "Company Name is required";

    if (!form.contactPerson.trim()) 
        newErrors.contactPerson = "Contact Person is required";

    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!/^[A-Za-z0-9]{15}$/.test(form.gstin))
      newErrors.gstin = "GSTIN must be 15 characters";

    if (!form.vehicleType.trim())
      newErrors.vehicleType = "Vehicle Type is required";

    if (!form.numVehicles || form.numVehicles <= 0)
      newErrors.numVehicles = "Enter a valid number of vehicles";

    if (!form.region.trim())
      newErrors.region = "Operating region is required";

    if (!form.terms)
      newErrors.terms = "You must agree to the terms";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Transporter Registered Successfully!");
    }
     navigate("/dashboard");
  };

  return (
    <div className="transporterform transporter-form">

      <div className="card transporter-card">

       <h3>Transporter Registration Form</h3>
        <h2>Company Details</h2>
         <div className="flex-col-gap">

          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="input-box"
          />
          {errors.companyName && <p className="error">{errors.companyName}</p>}

          <input
            type="text"
            placeholder="Contact Person"
            name="contactPerson"
            value={form.contactPerson}
            onChange={handleChange}
            className="input-box"
          />
          {errors.contactPerson && <p className="error">{errors.contactPerson}</p>}

          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={form.phone}
            onChange={(e) => {
             
              const value = e.target.value.replace(/[^0-9]/g, "");
              handleChange({ target: { name: "phone", value } });
            }}
            className="input-box"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input-box"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            placeholder="GSTIN"
            name="gstin"
            value={form.gstin}
            onChange={handleChange}
            className="input-box"
          />
          {errors.gstin && <p className="error">{errors.gstin}</p>}
        </div>

        <h3 className="section-label">Fleet Information</h3>

        <div className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Vehicle Type"
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            className="input-box"
          />
          {errors.vehicleType && <p className="error">{errors.vehicleType}</p>}

          <input
            type="number"
            placeholder="Number of Vehicles"
            name="numVehicles"
            value={form.numVehicles}
            onChange={handleChange}
            className="input-box"
          />
          {errors.numVehicles && <p className="error">{errors.numVehicles}</p>}

          <input
            type="text"
            placeholder="Operating Region"
            name="region"
            value={form.region}
            onChange={handleChange}
            className="input-box"
          />
          {errors.region && <p className="error">{errors.region}</p>}
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <p className="terms">I agree to the Terms and Conditions</p>
        </div>
        {errors.terms && <p className="error">{errors.terms}</p>}

        <button
          className="Register-button"
          onClick={handleSubmit}
        >
          Register Transporter
        </button>

      </div>
    </div>
  );
}

export default Registration;
