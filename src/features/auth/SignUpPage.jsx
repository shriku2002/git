import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Using our reusable components
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import OtpPopup from "./components/OtpPopup"; // Corrected import path

// Asset imports
import LoginBannerImage from "../../assets/LoginBackground.png";
import LoginTreeImage from "../../assets/LoginTree.png";
import LoginGrassImage from "../../assets/LoginGrass.png";
import ButterflyImage from "../../assets/ButterFlay.png";

// Helper component for password criteria
const PasswordCriterion = ({ label, isValid }) => (
  <div
    className={`flex items-center ${
      isValid ? "text-gray-700" : "text-gray-500"
    }`}
  >
    <span
      className={`mr-1.5 text-lg ${
        isValid ? "text-green-500" : "text-gray-400"
      }`}
    >
      {isValid ? "✓" : "•"}
    </span>
    {label}
  </div>
);

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  // Derived state for validation. This is cleaner than multiple error states.
  const isEmailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  );
  const passwordValidation = useMemo(
    () => ({
      lowerCase: /[a-z]/.test(password),
      upperCase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      minLength: password.length >= 8,
    }),
    [password]
  );

  const isPasswordValid = Object.values(passwordValidation).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    // The button will be disabled, but this is a final check.
    if (!isEmailValid || !isPasswordValid) {
      alert("Please ensure email and password are valid.");
      return;
    }
    console.log("Sign up attempt with:", { email, password });
    setShowOtpPopup(true);
  };

  const handleOtpVerify = (otp) => {
    console.log("OTP Verified:", otp, "for email:", email);
    setShowOtpPopup(false);
    navigate("/email-verified");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse h-screen w-full bg-white">
        {/* Right Side - Illustration */}
        <div
          className="hidden md:flex md:w-1/2 lg:w-3/5 bg-cover bg-center relative overflow-hidden "
          style={{ backgroundImage: `url(${LoginBannerImage})` }}
        >
          <img
            src={LoginGrassImage}
            alt="Grass"
            className="absolute bottom-0 left-3 w-full h-auto max-h-[10%] object-cover z-10 scale-x-[-1]"
          />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[60%] max-w-[600px] z-20 flex justify-center items-end h-full">
            <img
              src={LoginTreeImage}
              alt="Tree"
              className="max-w-full max-h-full object-contain "
            />
          </div>
          <img
            src={ButterflyImage}
            alt="Butterfly"
            className="absolute top-[35%] left-[28%] w-[30px] h-auto transform -translate-y-1/2 z-30 scale-x-[-1]"
          />
        </div>

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center items-center px-6 py-12">
          <div className="w-full max-w-md">
            <div className="text-center md:text-left mb-8">
              <h1 className="text-2xl font-bold mb-2 text-gray-800">
                Create your account
              </h1>
              <p className="text-gray-600">
                Welcome! Please fill in the details to get started.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div>
                <div className="relative">
                  <Input
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[45px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </button>
                </div>
                <div className="mt-2 space-y-1 text-sm grid grid-cols-2 gap-x-2">
                  <PasswordCriterion
                    label="Lower Case Character"
                    isValid={passwordValidation.lowerCase}
                  />
                  <PasswordCriterion
                    label="Upper Case Character"
                    isValid={passwordValidation.upperCase}
                  />
                  <PasswordCriterion
                    label="Numbers"
                    isValid={passwordValidation.number}
                  />
                  <PasswordCriterion
                    label="8 Minimum Characters"
                    isValid={passwordValidation.minLength}
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                disabled={!isEmailValid || !isPasswordValid}
              >
                Continue
              </Button>
            </form>
            <div className="relative flex items-center justify-center pt-8">
              <div className="border-t border-gray-300 flex-grow"></div>
              <div className="px-4 text-sm text-gray-500">Or Continue with</div>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[auto,auto] sm:justify-center gap-10 mt-5">
              <button type="button">
                <FcGoogle className="text-4xl " />
              </button>
              <button type="button">
                <FaLinkedin className="text-4xl  text-[#0077B5]" />
              </button>
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-[#5E9C42] hover:text-[#7DBE63]"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {showOtpPopup && (
        <OtpPopup
          email={email}
          onClose={() => setShowOtpPopup(false)}
          onVerify={handleOtpVerify}
        />
      )}
    </>
  );
};

export default SignUpPage;
