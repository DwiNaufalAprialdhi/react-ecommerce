/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

/* eslint-disable react/no-unescaped-entities */
const CardProduct = ({ children }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-stone-800" : "bg-stone-100"
        } shadow-lg overflow-hidden lg:w-1/6 md:w-1/4 w-full justify-center items-center rounded-md flex flex-col gap-5 h-full transition-all duration-400 ease-in-out`}
      >
        {children}
      </div>
    </>
  );
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/product/${id}`} className="w-full">
      <img
        src={image}
        alt="products"
        className="w-full lg:h-[250px] md:h-[200px] h-auto lg:object-fill md:object-fill object-cover"
      />
    </Link>
  );
};

const Body = ({ children, name, category, rate, count, id }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <Link to={`/product/${id}`} className="w-full p-4">
      <h2 className="font-bold text-sm mb-2">
        {name.length > 20 ? name.substring(0, 20) + ". . ." : name}
      </h2>
      <div className="flex flex-col gap-1">
        <p className="text-xs">{children.substring(0, 50)} . . .</p>
        <Rating className="text-xs" name="read-only" value={rate} readOnly />
        <h2 className="text-xs font-mono">{count} reviews</h2>
        <h2
          className={`${
            isDarkMode ? "text-white" : "text-white"
          } text-xs font-bold bg-stone-700 rounded-full max-w-max px-2 py-1`}
        >
          {category}
        </h2>
      </div>
    </Link>
  );
};

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-4 flex items-center justify-between">
      <h2 className="text-xs font-bold font-mono">
        {price.toLocaleString("un-US", { style: "currency", currency: "USD" })}
      </h2>

      <Button
        className={"text-xs bg-stone-700 rounded-full"}
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
        disabled={true}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
