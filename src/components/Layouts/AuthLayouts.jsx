/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { LuSunMoon } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";

/* eslint-disable react/prop-types */
const AuthLayouts = ({ children, title }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <>
      <div className={`absolute top-2 right-2`}>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`rounded-full text-sm p-1 ${
            isDarkMode
              ? "bg-stone-700 text-white"
              : "bg-stone-300 text-stone-700"
          }`}
        >
          {isDarkMode ? <BsFillMoonStarsFill /> : <LuSunMoon />}
        </button>
      </div>
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-xs mb-6">Enter your credentials</p>
        {children}
        <p className="text-sm py-4 text-center">
          {title === "Login"
            ? "Don't have an account? "
            : "Already have an account? "}
          {title === "Login" ? (
            <Link to="/register" className="font-bold">
              Register
            </Link>
          ) : (
            <Link to="/login" className="font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </>
  );
};

export default AuthLayouts;
