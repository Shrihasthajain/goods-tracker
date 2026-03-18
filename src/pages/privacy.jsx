import React from "react";
import "./privacy.css";

function PrivacyPolicy () {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-hero">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy matters to us. This policy explains how Goods Tracker
          collects, uses, and protects your information.
        </p>
      </div>

      <div className="privacy-card">
        <p className="intro-text">
          <strong>Goods Tracker</strong> is a digital logistics platform
          connecting Shippers, Transporters, and Drivers. We provide only
          technology services to facilitate shipment coordination and tracking.
          We are committed to protecting your privacy and handling your data
          responsibly.
        </p>

        <div className="policy-section">
          <h2>1. Information We Collect</h2>
          <ul>
            <li>Name, phone number, and email address</li>
            <li>Role selection (Shipper / Transporter / Driver)</li>
            <li>Company, vehicle, and shipment details</li>
            <li>Loading and unloading addresses</li>
            <li>Trip status and shipment progress</li>
            <li>Device information (model, OS version, app version)</li>
            <li>Log data for security and performance</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>2. Location Data Collection</h2>
          <p>
            For Drivers, we collect precise GPS location data to enable real-time
            shipment tracking.
          </p>

          <p className="bullet-title">Location data may be collected:</p>
          <ul>
            <li>During active trips</li>
            <li>When the app is running in the background</li>
            <li>When the device is locked (only during an active trip)</li>
          </ul>

          <p>
            Location tracking automatically stops once the trip is marked
            completed. We do not track driver location outside active shipment
            activity.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. Purpose of Data Usage</h2>
          <ul>
            <li>To enable load posting and assignment</li>
            <li>To provide live shipment tracking</li>
            <li>
              To allow transporters to discover nearby loads (Within 200 km radius)
            </li>
            <li>To improve service functionality and security</li>
            <li>To prevent fraud or misuse of the platform</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>4. Platform Role & Communication Disclaimer</h2>
          <p>
           Goods Tracker acts only as a technology service provider. All load-related communication, pricing, agreements, 
           and shipment discussions must be handled directly between the Shipper and Transporter.
           We do not participate in negotiations, contracts, or financial transactions between users unless explicitly
            integrated in the future.
          </p>
        </div>

        <div className="policy-section">
          <h2>5. Data Sharing</h2>
          <p>We do not sell or rent personal information.</p>

          <p className="bullet-title">Data is shared only:</p>
          <ul>
            <li>
              Between assigned Shipper, Transporter, and Driver during active
              shipments
            </li>
            <li>With secure cloud providers (such as Firebase)</li>
            <li>If required by law or legal authority</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>6. Data Storage & Security</h2>
          <p>
            All data is stored securely using Firebase (Google Cloud infrastructure). 
            We use encrypted communication protocols (HTTPS). While we implement industry-standard safeguards, 
            no system can guarantee 100% security.
          </p>
        </div>

        <div className="policy-section">
          <h2>7. User Rights</h2>
          <p className="bullet-title">Users may:</p>
          <ul>
            <li>Update their account information</li>
            <li>Request account deletion</li>
            <li>Withdraw location permissions via device settings</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>8. Account Suspension</h2>
          <p>
           We reserve the right to suspend or terminate accounts involved in fraud, misuse,
            false shipment posting, illegal activities, or violation of platform rules.
          </p>
        </div>

        <div className="policy-section">
          <h2>9. Data Retention</h2>
          <p>
           We retain user data only as long as necessary for operational, legal, and security purposes.
          </p>
        </div>

        <div className="policy-section">
          <h2>10. Children’s Privacy</h2>
          <p>
            This application is intended for users above 18 years of age.
             We do not knowingly collect data from minors.
          </p>
        </div>

        <div className="policy-section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Continued use of the app constitutes acceptance of changes.
          </p>
        </div>

        <div className="policy-section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, contact us at:</p>

          <p className="contact-email">
            📧 Email:{" "}
            <a href="mailto:support@goodstracker.com">
              support@goodstracker.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
