import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const router = useRouter();
  useEffect(() => {
    try {
      if (window.localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        savecart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

  const logout=()=>{
    localStorage.removeItem('token')
    setUser({value:null})
    setKey(Math.random())

  }

  const savecart = (mycart) => {
    window.localStorage.setItem("cart", JSON.stringify(mycart));

    let subt = 0;
    let keys = Object.keys(mycart);
    for (let i = 0; i < keys.length; i++) {
      subt += mycart[keys[i]]["price"] * mycart[keys[i]].qty;
    }
    setsubTotal(subt);
  };

  const addToCart = (itemcode, qty, price, name, size, varient) => {
    let newCart = cart;

    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
    } else {
      newCart[itemcode] = { qty: 1, price, name, size, varient };
    }
    setcart(newCart);

    savecart(newCart);
  };

  const buyNow = (itemcode, qty, price, name, size, varient) => {
    let newCart = { itemcode: { qty: 1, price, name, size, varient } };

    setcart(newCart);
    savecart(newCart);
    savecart(newCart);
    router.push("/checkout");
  };

  const clearcart = () => {
    setcart({});
    savecart({});
  };
  const removeFromCart = (itemcode, qty, price, name, size, varient) => {
    let newCart = cart;
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
    }
    if (newCart[itemcode].qty <= 0) {
      delete newCart[itemcode];
    }
    setcart(newCart);
    savecart(newCart);
  };

  return (
    <>
      {" "}
      <Head>
        <title>CodeWear.com -Wear the Code</title>
        <meta name="description" content="Nothing Much To Know" />
        <link rel="icon" href="/logo-modified.png" />
      </Head>
      <Navbar
        logout={logout}
        user={user}
        key={key}
        cart={cart}
        clearcart={clearcart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        subTotal={subTotal}
      />
      <Component
        buyNow={buyNow}
        cart={cart}
        clearcart={clearcart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
