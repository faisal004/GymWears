import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillShopping,
} from "react-icons/Ai";

import {MdAccountCircle} from "react-icons/Md";

const Navbar = ({ cart, addToCart, removeFromCart, subTotal }) => {
  
  const togglecart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center shadow-xl sticky top-0 bg-white z-10">
      <div className="logo">
        <Link href={"/"}>
          <a>
            <Image src="/logo-modified.png" alt="" height={70} width={100} />
          </a>
        </Link>
      </div>

      <div className="nav px-5 py-5 font-bold text-lg">
        <ul className="flex  space-x-2">
          <Link href={"/tshirt"}>
            <a>
              <li>T-shirt</li>
            </a>
          </Link>
          <Link href={"/mug"}>
            <a>
              <li>Mug</li>
            </a>
          </Link>
          <Link href={"/hoddies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        
        className="cart absolute right-0 mx-2 px-2 py-2 text-3xl  md:text-3xl cursor-pointer flex"
      >
      <Link href={'/login'}><a><MdAccountCircle className="mx-4 "/></a></Link>
        <AiOutlineShoppingCart onClick={togglecart} />
      </div>
      <div
        ref={ref}
        className="sidecart overflow-y-scroll h-[100vh] absolute top-0 right-0 bg-slate-300 p-10 font-semibold transform transition-transform translate-x-full"
      >
        <h2 className="flex flex-row text-center text-2xl">
          ShoppingCart
          <span>
            <AiOutlineShoppingCart className="m-1" />
          </span>
        </h2>
        <span onClick={togglecart} className="absolute top-2 right-2">
          <AiFillCloseCircle className="cursor-pointer text-slate-700" />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (         
            <div className="mt-2">No Item to display</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="flex my-3">
                  <div className="w-2/3">{cart[k].name}( {cart[k].size}/{cart[k].varient})</div>
                  <div className="flex items-center justify-center w-1/3">
                    <AiOutlineMinusCircle 
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className=" cursor-pointer mx-2"
                    />
                    {cart[k].qty}
                    <AiOutlinePlusCircle  onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }} className=" cursor-pointer mx-2" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <Link href={'/checkout'}><button className="inline-flex text-white bg-slate-500 border-0 py-1 px-4 focus:outline-none hover:bg-slate-600 rounded">
          <AiFillShopping className=" m-1" />
          CheckOut
        </button></Link>
      </div>
    </div>
  );
};

export default Navbar;
