import React from "react";
import "./termsconditions.css";

function TermsConditions ()  {
  return (
    <div className="terms-wrapper">
      <div className="terms-hero">
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to Goods Tracker. By downloading, accessing, or using this application, you
          agree to be bound by these Terms & Conditions. If you do not agree, please do not use the app.
        </p>
      </div>

      <div className="terms-card">

        <div className="terms-section">
          <h2>1. Service Description</h2>
          <p>
            Goods Tracker is a digital logistics platform that connects Shippers,
            Transporters, and Drivers for shipment coordination and live
            tracking. We provide only technology services and do not operate as
            a transport company.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old and legally capable of entering
            into binding agreements to use this application.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information.</li>
            <li>Maintain confidentiality of account credentials.</li>
            <li>Use the platform only for lawful logistics purposes.</li>
            <li>Ensure shipment details are accurate and genuine.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>4. Platform Role & Communication</h2>
          <p>
            Goods Tracker acts solely as an intermediary technology platform.
            All load-related communication, negotiation, pricing, agreements,
            and shipment arrangements must be handled directly between the
            Shipper and Transporter.
          </p>
          <p>
            We are not responsible for any disputes, damages, delays, or contractual
            disagreements between users.
          </p>
        </div>

        <div className="terms-section">
          <h2>5. Driver Location Tracking</h2>
          <p>
            Drivers agree that their real-time location may be tracked during
            active trips. Location tracking may continue in the background while
            a trip is active and will automatically stop once the trip is
            completed.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Payments & Charges</h2>
          <p>
            If applicable, payments may be processed through third-party payment
            gateways. We do not store card numbers, CVV, UPI PIN, or banking
            credentials. Subscription charges and service fees may change with prior notice.
          </p>
        </div>

        <div className="terms-section">
          <h2>7. Prohibited Activities</h2>
          <ul>
            <li>Posting false or misleading shipment information</li>
            <li>Fraudulent activities or impersonation</li>
            <li>Using the app for illegal goods or activities</li>
            <li>Interfering with app functionality or security</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>8. Account Suspension & Termination</h2>
          <p>
            We reserve the right to suspend or permanently terminate accounts
            involved in fraud, misuse, illegal activity, or violation of these
            Terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>9. Limitation of Liability</h2>
          <p>Goods Tracker is not liable for:</p>
          <ul>
            <li>Loss or damage of goods</li>
            <li>Delivery delays</li>
            <li>Driver conduct</li>
            <li>Shipment disputes</li>
            <li>Network or technical failures</li>
          </ul>
          <p>
            Users assume full responsibility for their shipment agreements and
            outcomes.
          </p>
        </div>

        <div className="terms-section">
          <h2>10. Data & Privacy</h2>
          <p>
            Your use of the app is also governed by our Privacy Policy. By using
            this app, you consent to data collection and usage as described in
            the Privacy Policy.
          </p>
        </div>

        <div className="terms-section">
          <h2>11. Intellectual Property</h2>
          <p>
            All content, branding, and technology within the application are the
            property of Goods Tracker and may not be copied or reused without
            written permission.
          </p>
        </div>

        <div className="terms-section">
          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions at any time. Continued use of
            the application constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div className="terms-section">
          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of India. Any disputes shall be subject to the jurisdiction
            of Indian courts.
          </p>
        </div>

        <div className="terms-section">
          <h2>14. Contact Us</h2>
          <p>For questions regarding these Terms & Conditions:</p>

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

export default TermsConditions;
