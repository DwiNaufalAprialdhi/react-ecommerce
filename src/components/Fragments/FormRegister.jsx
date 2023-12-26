import Button from "../Button/Button";
import InputForm from "../Input/Index";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          label={"Fullname"}
          type={"text"}
          id={"fullname"}
          name={"fullname"}
          placeholder={"Enter your fullname"}
        />
        <InputForm
          label={"Email"}
          type={"email"}
          id={"email"}
          name={"email"}
          placeholder={"Enter your email"}
        />
        <InputForm
          label={"Password"}
          type={"password"}
          id={"password"}
          name={"password"}
          placeholder={"********"}
        />
        <InputForm
          label={"Confirm Password"}
          type={"password"}
          id={"confirm_password"}
          name={"confirm_password"}
          placeholder={"********"}
        />
        <Button className={"bg-stone-700 w-full"} type={"submit"}>
          Register
        </Button>
      </form>
    </>
  );
};

export default FormRegister;
