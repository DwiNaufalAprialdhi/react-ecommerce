/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import MyButton from "../Button/Button";
import { TbLogout, TbLogin2 } from "react-icons/tb";
import { BiSolidLogIn } from "react-icons/bi";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";
import { LuSunMoon } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";
const Navbar = ({ token, dataProducts = [] }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);
  return (
    <>
      <nav
        className={`w-full sticky top-0 lg:px-[105px] md:px-12 px-4 py-5 ${
          isDarkMode ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-900"
        } flex flex-row items-center justify-between z-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-row items-center gap-2">
          <Link to="/" className="font-bold text-xl mr-2">
            DNA STORE
          </Link>
          <Link to="/products" className="font-semibold text-sm">
            Products
          </Link>
          <Link to="#" className="font-semibold text-sm">
            About
          </Link>
          <Link to="#" className="font-semibold text-sm">
            Contact
          </Link>
        </div>
        {token ? (
          <div className="flex flex-row items-center gap-2">
            <Cart dataProducts={dataProducts} />
            <h2 className="font-semibold text-xs">
              {token.user.length > 15
                ? token.user.substring(0, 15) + "..."
                : token.user}
            </h2>
            <MyButton
              onClick={handleLogout}
              className={
                " bg-stone-700 rounded-full flex items-center gap-1 text-xs"
              }
            >
              <TbLogout /> Logout
            </MyButton>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`rounded-full text-sm p-1 ${
                isDarkMode ? "bg-stone-700" : "bg-stone-300 text-stone-700"
              } hover:scale-105 duration-300`}
            >
              {isDarkMode ? <LuSunMoon /> : <BsFillMoonStarsFill />}
            </button>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-2">
            <Link to="/login">
              <MyButton
                className={
                  "bg-stone-700 rounded-full text-xs flex items-center gap-1"
                }
              >
                <TbLogin2 /> Login
              </MyButton>
            </Link>
            <Link to="/register">
              <MyButton
                className={
                  "bg-stone-700 rounded-full text-xs flex items-center gap-1"
                }
              >
                <BiSolidLogIn /> Register
              </MyButton>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
