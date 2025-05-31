import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import LoginBannerImage from "../../assets/SignupBackground.png";
import LoginTreeImage from "../../assets/LoginTree.png";
import LoginGrassImage from "../../assets/LoginGrass.png";
import ButterflyImage from "../../assets/ButterFlay.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
    // On successful login:
    // navigate("/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left Side - Illustration */}
      <div
        className="hidden md:flex md:w-1/2 lg:w-3/5 bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${LoginBannerImage})` }}
      >
        <img
          src={LoginGrassImage}
          alt="Grass"
          className="absolute bottom-0.5 -left-2 w-full h-auto max-h-[10%] object-cover z-10"
        />
        <div
          className="absolute bottom-[5%] -right-[5%] transform -translate-x-1/2 w-[70%] sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[60%] max-w-[600px] z-20 flex justify-center items-end"
          style={{ height: "80%" }}
        >
          <img
            src={LoginTreeImage}
            alt="Tree"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <img
          src={ButterflyImage}
          alt="Butterfly"
          className="absolute top-[45%] right-[26%] w-[30px] h-auto transform -translate-y-1/2 z-30"
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center items-center px-6 sm:px-10 py-12">
        <div className="w-full max-w-md">
          <div className="text-center md:text-left mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              Login your account
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
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <Input
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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
            <Button type="submit" variant="primary">
              Login
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
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-[#5E9C42] hover:text-[#7DBE63]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
