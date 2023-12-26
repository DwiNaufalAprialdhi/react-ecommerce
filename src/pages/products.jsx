/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import CardProduct from "../components/Fragments/CardProduct";
import Navbar from "../components/Fragments/Navbar";
import { useContext, useEffect, useState } from "react";
import { getProducts } from "../services/fake_store_api";
import { useLogin } from "../hooks/useLogin";
import { DarkMode } from "../context/DarkMode";

const products = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const token = useLogin();
  const { isDarkMode } = useContext(DarkMode);
  useEffect(() => {
    getProducts((data) => {
      setDataProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar dataProducts={dataProducts} token={token} />
      <section
        className={`flex flex-wrap w-full justify-center items-center lg:px-[105px] md:px-12 px-4 lg:py-[80px] md:py-[60px] py-[40px] gap-5 ${
          isDarkMode ? "bg-stone-900 text-white" : "bg-white text-stone-900"
        } transition-all duration-300 ease-in-out`}
      >
        {dataProducts.length > 0 &&
          dataProducts.map((products) => {
            return (
              <CardProduct key={products.id}>
                <CardProduct.Header image={products.image} id={products.id} />
                <CardProduct.Body
                  id={products.id}
                  name={products.title}
                  category={products.category}
                  rate={products.rating.rate}
                  count={products.rating.count}
                >
                  {products.description}
                </CardProduct.Body>
                <CardProduct.Footer price={products.price} id={products.id} />
              </CardProduct>
            );
          })}
      </section>
    </>
  );
};

export default products;
