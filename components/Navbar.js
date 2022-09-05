import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/Ai";

const Navbar = () => {
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
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center shadow-xl ">
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
        onClick={togglecart}
        className="cart absolute right-0 px-2 py-2 text-3xl  md:text-6xl cursor-pointer"
      >
        <AiOutlineShoppingCart />
      </div>
      <div
        ref={ref}
        className="sidecart absolute top-0 right-0 bg-slate-300 p-10 text-xl font-semibold transform transition-transform translate-x-full"
      >
        <h2 className="flex flex-row">
          ShoppingCart
          <span>
            <AiOutlineShoppingCart className="m-1" />
          </span>
        </h2>
        <span onClick={togglecart} className="absolute top-2 right-2">
          <AiFillCloseCircle className="cursor-pointer text-slate-700" />
        </span>
        <ol>
          <li>fdfd</li>
          <li>fdfd</li>
          <li>fdfd</li>
          <li>fdfd</li>
          <li>fdfd</li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
