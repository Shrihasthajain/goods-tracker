import React,{useRef} from "react";
import "./otp.css";

function OTP() {

        const inputsRef = useRef([]);

        // Handle input change
        const handleChange = (e, index) => {
            const value = e.target.value;

            // Allow only numbers
            if (!/^[0-9]$/.test(value) && value !== "") return;

            if (value !== "" && index < 5) {
            inputsRef.current[index + 1].focus(); // Move to next box
            }
        };

        // Handle Backspace -> Move to previous box
        const handleKeyDown = (e, index) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
            }
        };

return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6750A4] via-[#6750A4] to-[#6750A4] px-4">
      <div
        className="card text-center px-8 py-10 max-w-md w-full rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-black mb-2">OTP Verification</h2>
        <p className="text-md mb-6 text-black">
          Enter the 6-digit code sent to your phone number
        </p>

          <div className="flex justify-center gap-2 mb-4 overflow-hidden">
             {[...Array(6)].map((_, index) => (
             <input
                key={index}
                type="text"
                maxLength="1"
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg rounded-lg border border-black bg-white focus:outline-none focus:border-black"

              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}
            </div>

        <p className="text-black mt-4 text-sm">
          Didn't receive the code?{' '}
          <button className="underline font-semibold text-black">Resend</button>
        </p>

        <button
          className="w-full py-3 mt-6 text-white font-semibold rounded-lg bg-gradient-to-r from-[#6750A4] via-[#6750A4] to-[#6750A4]"
        >
          Verify and Continue
        </button>
      </div>
    </div>
  );
}
export default OTP;