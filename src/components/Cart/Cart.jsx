/* eslint-disable react/prop-types */
import { IoCartOutline } from "react-icons/io5";
import { Modal } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MyButton from "../Button/Button";
import { DarkMode } from "../../context/DarkMode";

const Cart = ({ dataProducts = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode } = useContext(DarkMode);

  useEffect(() => {
    if (cart.length > 0 && dataProducts.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = dataProducts.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, dataProducts]);

  return (
    <>
      <div className="relative pl-3 py-2">
        <IoCartOutline
          className="cursor-pointer text-2xl"
          onClick={() => setOpenModal(true)}
        />
        {cart.length > 0 && (
          <h2
            className={`absolute top-0 left-0 text-xs font-bold ${
              isDarkMode ? "text-stone-800 bg-white" : "text-white bg-stone-700"
            }  rounded-full py-[2px] px-[6px] transition-all duration-300 ease-in-out`}
          >
            {cart.length}
          </h2>
        )}
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          className="bg-black"
        >
          <Modal.Header>
            <div className="flex items-center gap-1">
              <IoCartOutline className="text-xl" />
              <h2 className="font-semibold text-sm">Cart ({cart.length})</h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            {cart.length === 0 ? (
              <img
                src="/images/cart-empty.jpg"
                alt="cart"
                className="w-full h-[500px] object-cover"
              />
            ) : (
              <div className="w-full text-stone-800 flex flex-col gap-3">
                {cart.length > 0 &&
                  dataProducts.length > 0 &&
                  cart.map((item) => {
                    const product = dataProducts.find(
                      (product) => product.id === item.id
                    );
                    return (
                      <div key={product.id} className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                          <img
                            src={product.image}
                            alt="products"
                            className="w-[100px]"
                          />
                          <div className="flex flex-col gap-1">
                            <h2 className="font-semibold text-sm">
                              Product :{" "}
                              <span className="font-bold text-base">
                                {product.title}
                              </span>
                            </h2>
                            <h2 className="font-semibold text-sm">
                              Price :{" "}
                              <span className="font-bold text-base">
                                {product.price.toLocaleString("un-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                              </span>
                            </h2>
                            <h2 className="font-semibold text-sm">
                              Qty :{" "}
                              <span className="font-bold text-base">
                                {item.qty}
                              </span>
                            </h2>
                            <h2 className="font-semibold text-sm">
                              Total :{" "}
                              <span className="font-bold text-base">
                                {(product.price * item.qty).toLocaleString(
                                  "un-US",
                                  {
                                    style: "currency",
                                    currency: "USD",
                                  }
                                )}
                              </span>
                            </h2>
                          </div>
                        </div>
                        <hr></hr>
                      </div>
                    );
                  })}
                <div className="w-full text-end">
                  <h2 className="font-bold text-sm">
                    Total Price :{" "}
                    {totalPrice &&
                      totalPrice.toLocaleString("un-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                  </h2>
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="flex items-center justify-between">
            <MyButton
              onClick={() => setOpenModal(false)}
              className={"bg-stone-700 text-xs rounded-full"}
            >
              Continue shoping
            </MyButton>
            <MyButton
              onClick={() => setOpenModal(false)}
              className={"bg-green-700 text-xs rounded-full"}
            >
              Checkout
            </MyButton>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
