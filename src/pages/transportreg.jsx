import React, { useState } from "react";
import "./transportreg.css";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
        newErrors.companyName = t("registration.companyName");

    if (!form.contactPerson.trim()) 
        newErrors.contactPerson = t("registration.contactPerson");

    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = t("registration.phone");

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = t("registration.email");

    if (!/^[A-Za-z0-9]{15}$/.test(form.gstin))
      newErrors.gstin = t("registration.gstin");

    if (!form.vehicleType.trim())
      newErrors.vehicleType = t("registration.vehicleType");

    if (!form.numVehicles || form.numVehicles <= 0)
      newErrors.numVehicles = t("registration.numVehicles");

    if (!form.region.trim())
      newErrors.region = t("registration.region");

    if (!form.terms)
      newErrors.terms = t("registration.terms");

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

       <h3>{t("registration.title")}</h3>
        <h2>{t("registration.companyDetails")}</h2>
         <div className="flex-col-gap">

          <input
            type="text"
            placeholder={t("registration.companyName")}
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="input-box"
          />
          {errors.companyName && <p className="error">{errors.companyName}</p>}

          <input
            type="text"
            placeholder={t("registration.contactPerson")}
            name="contactPerson"
            value={form.contactPerson}
            onChange={handleChange}
            className="input-box"
          />
          {errors.contactPerson && <p className="error">{errors.contactPerson}</p>}

          <input
            type="text"
            placeholder={t("registration.phone")}
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
            placeholder={t("registration.email")}
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input-box"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            placeholder={t("registration.gstin")}
            name="gstin"
            value={form.gstin}
            onChange={handleChange}
            className="input-box"
          />
          {errors.gstin && <p className="error">{errors.gstin}</p>}
        </div>

        <h3 className="section-label">{t("registration.fleetInfo")}</h3>

        <div className="flex flex-col gap-3">

          <input
            type="text"
            placeholder={t("registration.vehicleType")}
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            className="input-box"
          />
          {errors.vehicleType && <p className="error">{errors.vehicleType}</p>}

          <input
            type="number"
            placeholder={t("registration.numVehicles")}
            name="numVehicles"
            value={form.numVehicles}
            onChange={handleChange}
            className="input-box"
          />
          {errors.numVehicles && <p className="error">{errors.numVehicles}</p>}

          <input
            type="text"
            placeholder={t("registration.region")}
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
            <p className="terms">
              {t("registration.agree")}{" "}
              <Link to="/termsconditions" className="terms-link">
                {t("registration.termsLink")}
              </Link>
            </p>
      </div>

        {errors.terms && <p className="error">{errors.terms}</p>}

        <button
          className="Register-button"
          onClick={handleSubmit}
        >
          {t("registration.register")}
        </button>

      </div>
    </div>
  );
}

export default Registration;
