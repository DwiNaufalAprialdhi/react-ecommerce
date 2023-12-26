/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Navbar from "../components/Fragments/Navbar";
import { useLogin } from "../hooks/useLogin";
import { getProducts } from "../services/fake_store_api";

const home = () => {
  const token = useLogin();
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setDataProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar token={token} dataProducts={dataProducts} />
      <div className="text-3xl font-bold h-screen w-full flex justify-center items-center">
        Hello World
      </div>
    </>
  );
};

export default home;
