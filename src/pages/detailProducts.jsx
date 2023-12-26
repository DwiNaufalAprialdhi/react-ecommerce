/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailProduct, getProducts } from "../services/fake_store_api";
import Navbar from "../components/Fragments/Navbar";
import { useLogin } from "../hooks/useLogin";
import Button from "../components/Button/Button";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";
import { DarkMode } from "../context/DarkMode";

const detailProducts = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const token = useLogin();
  const cart = useSelector((state) => state.cart.data);
  const [dataProducts, setDataProducts] = useState([]);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    getProducts((data) => {
      setDataProducts(data);
    });
  }, []);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  return (
    <>
      <Navbar token={token} cart={cart} dataProducts={dataProducts} />
      {Object.keys(product).length > 0 && (
        <>
          <div
            className={`lg:pt-[80px] md:pt-[60px] pt-[40px] h-screen lg:px-[105px] md:px-12 px-4 mx-auto justify-center ${
              isDarkMode ? "bg-stone-900 text-white" : "bg-white text-stone-900"
            } transition-all duration-300 ease-in-out`}
          >
            <h2 className="flex md:flex-row flex-col gap-2 lg:px-[105px] md:px-12 px-4 py-4">
              <Link
                className="text-sm italic font-bold text-stone-500"
                to={"/products"}
              >
                / Products
              </Link>
              <Link
                className="text-sm italic font-bold text-stone-500"
                to={`/product/${product.id}`}
              >
                / {product.title}
              </Link>
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <div className="md:col-span-4 col-span-12 w-full">
                <img
                  src={product.image}
                  alt="products"
                  className="md:w-[250px] w-full md:mx-auto mx-0 rounded-lg"
                />
              </div>
              <div className="md:col-span-4 col-span-12 w-full">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">{product.title}</h1>

                  <h1 className="font-bold text-2xl">
                    {product.price.toLocaleString("un-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h1>
                  <hr className="opacity-20 my-3" />
                  <h2 className="font-bold text-sm text-stone-500">
                    Category :{" "}
                    <span
                      className={`${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {product.category}
                    </span>
                  </h2>
                  <h2 className="font-bold text-sm text-stone-500">
                    Reviews :{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-white" : "text-black"
                      } font-mono`}
                    >
                      {product.rating.rate}/5 ({product.rating.count})
                    </span>
                  </h2>
                  <Rating
                    className="text-xs"
                    name="read-only"
                    value={product.rating.rate}
                    readOnly
                  />
                  <p className=" text-sm font-bold mt-4 text-stone-500">
                    Description :{" "}
                    <span
                      className={`${
                        isDarkMode ? "text-white" : "text-black"
                      } font-normal`}
                    >
                      {product.description}
                    </span>
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 col-span-12 w-full">
                <div className="md:max-w-xs max-w-none md:mx-auto mx-0 p-4 flex flex-col gap-4 border-2 rounded-lg border-stone-500">
                  <Button className={"text-sm bg-green-700 rounded-full"}>
                    Buy Now
                  </Button>
                  <Button className={"text-sm bg-stone-700 rounded-full"}>
                    Add To Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default detailProducts;
