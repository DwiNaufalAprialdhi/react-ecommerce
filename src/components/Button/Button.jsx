/* eslint-disable react/prop-types */
const Button = ({ className, type, children, onClick }) => {
  return (
    <>
      <button
        className={`${
          className ? className : "bg-stone-700"
        } text-white font-bold py-2 px-4 rounded hover:scale-105 duration-300 ease-in-out`}
        type={type ? type : "button"}
        onClick={onClick}
      >
        {children ? children : "..."}
      </button>
    </>
  );
};

export default Button;
