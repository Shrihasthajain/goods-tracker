import React, { useState } from "react";
import {
  FaUserCircle,
  FaTruck,
  FaPencilAlt,
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaIdCard,
  FaMapMarkedAlt,
  FaTimes,
  FaCamera,
  FaImages,
} from "react-icons/fa";

import "./tprofile.css";

function TransporterProfile() {
  const [showPhotoPopup, setShowPhotoPopup] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setShowPhotoPopup(false);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-icon-box">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-photo" />
          ) : (
            <FaUserCircle className="profile-user-icon" />
          )}

          <div
            className="profile-edit-icon"
            onClick={() => setShowPhotoPopup(true)}>
            <FaPencilAlt />
          </div>
        </div>

        <h2 className="profile-name">Clara</h2>
        <p className="profile-role">Transporter | West</p>

        <div className="profile-tagline">
          <span>Your logistics journey starts here</span>
          <FaTruck className="truck-icon" />
        </div>

        <button
          className="edit-profile-btn"
          onClick={() => setShowProfilePopup(true)}>
          Edit Profile
        </button>
      </div>

      <div className="profile-card details-card">
        <h3 className="details-heading">Transporter Details</h3>
        <div className="details-list">
  <div className="details-first-row">
    <p> <FaBuilding /> <span>Company Name:</span> AAA Logistics </p>

    <button
      className="details-edit-btn"
      onClick={() => setShowDetailsPopup(true)}> Edit </button>
      
  </div>
        <p> <FaUserCircle /> <span>Contact Person:</span> Clara </p>
        <p> <FaPhoneAlt /> <span>Phone:</span> +91 98765 43210 </p>
        <p> <FaEnvelope /> <span>Email:</span> aaalogistics@gmail.com </p>
        <p> <FaIdCard /> <span>GST:</span> 29ABCDE1234F1Z5 </p>
        <p> <FaTruck /> <span>Vehicle Type:</span> Trucks & Containers </p>
        <p> <FaTruck /> <span>Number of Vehicles:</span> 12 </p>
        <p> <FaMapMarkedAlt /> <span>Operating Region:</span> West India </p>
  </div>
        <button className="logout-btn">Logout</button>
      </div>

      {showPhotoPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button
              className="popup-close"
              onClick={() => setShowPhotoPopup(false)}>
              <FaTimes />
            </button>

            <h3>Upload Profile Photo</h3>

            <label className="upload-option">
              <FaCamera /> Open Camera
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                hidden />
            </label>

            <label className="upload-option">
              <FaImages /> Choose from Gallery
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                hidden />
            </label>
          </div>
        </div>
      )}

      {showProfilePopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button
              className="popup-close"
              onClick={() => setShowProfilePopup(false)}>
              <FaTimes />
            </button>

            <h3>Edit Profile</h3>

            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Region" />

            <button className="save-btn">Save Changes</button>
          </div>
        </div>
      )}

      {showDetailsPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button
              className="popup-close"
              onClick={() => setShowDetailsPopup(false)}>
              <FaTimes />
            </button>

            <h3>Edit Transporter Details</h3>

            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="GST Number" />
            <input type="text" placeholder="Vehicle Type" />
            <input type="number" placeholder="Number of Vehicles" />
            <input type="text" placeholder="Operating Region" />

            <button className="save-btn">Update Details</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransporterProfile;
