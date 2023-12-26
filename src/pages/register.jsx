/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { DarkMode } from "../context/DarkMode";

const RegisterPage = () => {
  const { isDarkMode } = useContext(DarkMode);
  return (
    <>
      <div
        className={`flex flex-row gap-2 h-screen w-full items-center justify-center ${
          isDarkMode ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-900"
        } treansition-all duration-300 ease-in-out`}
      >
        <AuthLayouts title={"Register"}>
          <FormRegister />
        </AuthLayouts>
      </div>
    </>
  );
};

export default RegisterPage;
