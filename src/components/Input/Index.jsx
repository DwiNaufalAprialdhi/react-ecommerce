/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

const InputForm = ({ label, type, id, name, placeholder }) => {
  return (
    <>
      <div className="flex flex-col gap-1 mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} id={id} name={name} placeholder={placeholder} />
      </div>
    </>
  );
};

export default InputForm;
