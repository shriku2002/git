import { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

// Assuming you have an image named 'OtpMailBox.png' in your assets folder
import OtpMailBox from "../../../assets/OtpMailBox.png";

const OtpIllustration = () => (
  <div className="flex justify-center items-center my-4">
    {/* This now uses your specific image asset */}
    <img src={OtpMailBox} alt="OTP Sent Illustration" className="w-48 h-auto" />
  </div>
);

const OtpPopup = ({ email, onClose, onVerify }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [resendCooldown, setResendCooldown] = useState(30);
  const inputRefs = useRef([]);

  // --- NEW: useEffect for Automatic Verification ---
  // This effect runs whenever the OTP state changes.
  useEffect(() => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      // If all 6 digits are filled, automatically call the onVerify function.
      onVerify(enteredOtp);
    }
  }, [otp, onVerify]);

  // Effect to focus the first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Effect for the "Resend OTP" cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(
        () => setResendCooldown(resendCooldown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleResend = () => {
    if (resendCooldown === 0) {
      console.log("Resending OTP to", email);
      setResendCooldown(30); // Restart the timer
    }
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to the previous input on backspace if the current input is empty
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-lg relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <IoMdClose size={24} />
        </button>

        <OtpIllustration />

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Check your inbox for otp on your email address
        </h2>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          We sent an OTP to{" "}
          <span className="font-medium text-gray-700">{email}</span>. If you
          don't see it, check your spam folder. After confirming your email, you
          can explore the platform.
        </p>

        <div className="flex justify-center items-center space-x-3 sm:space-x-4 mb-8">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-semibold border-b-2 bg-gray-50 rounded-lg border-gray-300 focus:border-green-500 focus:outline-none focus:ring-0"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        {/* The "Verify OTP" button has been removed for automatic submission */}

        <div className="mt-4 h-6">
          {" "}
          {/* This div prevents layout shift */}
          {resendCooldown === 0 && (
            <button
              type="button"
              onClick={handleResend}
              className="text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              Didn't receive OTP?{" "}
              <span className="text-[#5E9C42] font-semibold">Resend</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpPopup;
