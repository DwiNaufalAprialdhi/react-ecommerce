/* eslint-disable react/prop-types */
const Label = ({ htmlFor, children }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="text-base font-bold">
        {children}
      </label>
    </>
  );
};

export default Label;
