import { useState } from "react";
import { login } from "../../services/fake_store_api";
import Button from "../Button/Button";
import InputForm from "../Input/Index";
import { BiSolidMessageAltError } from "react-icons/bi";

const FormLogin = () => {
  const [error, setError] = useState(null);
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const dataLogin = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(dataLogin, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setError(res.response.data);
      }
    });
  };
  return (
    <>
      {error && (
        <a
          href="/login"
          className=" bg-red-500 rounded-md my-4 px-4 py-2 flex items-center justify-between gap-3"
        >
          <BiSolidMessageAltError className="text-3xl" />
          <h2 className="font-bold text-sm">{error}, tap for reload page</h2>
        </a>
      )}
      <form onSubmit={handleLogin}>
        <InputForm
          label={"Username"}
          type={"text"}
          id={"username"}
          name={"username"}
          placeholder={"Enter your username"}
        />
        <InputForm
          label={"Password"}
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"********"}
        />

        <Button className={"bg-stone-700 w-full"} type={"submit"}>
          Login
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
