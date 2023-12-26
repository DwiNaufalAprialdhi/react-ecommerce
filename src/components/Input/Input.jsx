import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

/* eslint-disable react/prop-types */
const Input = ({ type, id, name, placeholder }) => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={`outline-none px-2 py-2 ${
          isDarkMode ? "bg-stone-700 text-white" : "bg-white text-stone-900"
        } rounded-md placeholder:opacity-50 text-sm`}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
