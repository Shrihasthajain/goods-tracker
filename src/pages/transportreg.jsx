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
    <div className="min-h-screen flex items-center justify-center bg-[#6750A4] px-4 transporter-form">

      <div className="card text-center px-8 py-6 mt-5 mb-5 max-w-md w-full rounded-2xl shadow-xl border border-white">

        <h3 className="text-2xl font-bold text-black">Transporter Registration Form</h3>

       
        <h2 className="text-left font-bold text-black mt-2 mb-2">Company Details</h2>

        <div className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="border border-white rounded-lg p-3"
          />
          {errors.companyName && <p className="error">{errors.companyName}</p>}

          <input
            type="text"
            placeholder="Contact Person"
            name="contactPerson"
            value={form.contactPerson}
            onChange={handleChange}
            className="border border-white rounded-lg p-3"
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
            className="border border-white rounded-lg p-3"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border border-white rounded-lg p-3"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            placeholder="GSTIN"
            name="gstin"
            value={form.gstin}
            onChange={handleChange}
            className="border border-white rounded-lg p-3"
          />
          {errors.gstin && <p className="error">{errors.gstin}</p>}
        </div>

        <h3 className="text-left font-bold text-black mt-4 mb-2">Fleet Information</h3>

        <div className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Vehicle Type"
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            className="border border-white rounded-lg p-3"
          />
          {errors.vehicleType && <p className="error">{errors.vehicleType}</p>}

          <input
            type="number"
            placeholder="Number of Vehicles"
            name="numVehicles"
            value={form.numVehicles}
            onChange={handleChange}
            className="border border-white rounded-lg p-3"
          />
          {errors.numVehicles && <p className="error">{errors.numVehicles}</p>}

          <input
            type="text"
            placeholder="Operating Region"
            name="region"
            value={form.region}
            onChange={handleChange}
            className="border border-white rounded-lg p-3"
          />
          {errors.region && <p className="error">{errors.region}</p>}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <p className="text-black text-sm py-2">I agree to the Terms and Conditions</p>
        </div>
        {errors.terms && <p className="error">{errors.terms}</p>}

        <button
          className="w-full mt-4 py-3 text-white font-semibold rounded-lg bg-[#6750A4]"
          onClick={handleSubmit}
        >
          Register Transporter
        </button>

      </div>
    </div>
  );
}

export default Registration;
