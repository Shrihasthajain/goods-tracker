import React from 'react';
import "./transportreg.css";

function Registration() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6750A4] via-[#A890CF] to-[#947BC3] px-4">

      <div className="card text-center px-8 py-2 mt-5 mb-5 max-w-md w-full rounded-2xl shadow-xl border border-white">

        <h3 className="text-2xl font-bold text-black">Transporter Registration Form</h3>

        {/* Company Details */}
        <h2 className="text-left font-bold text-black mt-2 mb-2">Company Details</h2>

        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Company Name"
            className="border border-black rounded-lg p-3" />

          <input type="text" placeholder="Contact Person"
            className="border border-black rounded-lg p-3" />

          <input type="text" placeholder="Phone Number"
            className="border border-black rounded-lg p-3" />

          <input type="email" placeholder="Email"
            className="border border-black rounded-lg p-3" />

          <input type="text" placeholder="GSTIN"
            className="border border-black rounded-lg p-3" />
        </div>

        {/* Fleet Information */}
        <h3 className="text-left font-bold text-black mt-4 mb-2">Fleet Information</h3>

        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Vehicle Type"
            className="border border-black rounded-lg p-3" />

          <input type="number" placeholder="Number of Vehicles"
            className="border border-black rounded-lg p-3" />

          <input type="text" placeholder="Operating Region"
            className="border border-black rounded-lg p-3" />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center gap-2 mt-3">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-black text-sm">I agree to the Terms and Conditions</p>
        </div>

        <button
          className="w-full mt-4 py-2 bg-[#6750A4] text-white font-semibold rounded-lg">
          Register Transporter
        </button>

      </div>
    </div>
  );
}

export default Registration;
