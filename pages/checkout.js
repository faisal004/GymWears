import React, { useState } from "react";
import {
  AiFillShopping,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/Ai";
import Link from "next/link";
//import Head from "next/head";
//import Script from "next/script";

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = async (e) => {
    
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
      if (e.target.value.length == 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pinJson = await pins.json();
        if (Object.keys(pinJson).includes(e.target.value)) {
          setState(pinJson[e.target.value][1]);
          setCity(pinJson[e.target.value][0]);
        }else{
          setState('')
          setCity('')
        }
      }
      else{
        setState('')
        setCity('')
      }
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    }
    if (
      name.length > 3 &&
      email.length > 3 &&
      phone.length > 3 &&
      address.length > 3 &&
      pincode.length > 3 
      
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //   const intiatepayment = async () => {

  //      let oid=Math.floor(Math.random() * Date.now())

  //     const data = { cart,subTotal,oid ,email:email,name,address,pincode,phone};

  //     let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
  //   method: 'POST', // or 'PUT'
  //   headers: {
  //      'Content-Type': 'application/json',
  //    },
  //    body: JSON.stringify(data),
  //  })
  //   let txnRes = await a.json()
  //    console.log(txnRes)
  //    let txnToken=txnRes.txnToken

  //     var config = {
  //      "root": "",
  //       "flow": "DEFAULT",
  //       "data": {
  //      "orderId": oid, /* update order id */
  //     "token": txnToken, /* update token value */
  //      "tokenType": "TXN_TOKEN",
  //      "amount": subTotal /* update amount */
  //      },
  //       "handler": {
  //      "notifyMerchant": function(eventName,data){
  //      console.log("notifyMerchant handler function called");
  //      console.log("eventName => ",eventName);
  //       console.log("data => ",data);
  //       }
  //        }
  //       };

  //        window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
  //        // after successfully updating configuration, invoke JS Checkout
  //       window.Paytm.CheckoutJS.invoke();
  //      }).catch(function onError(error){
  //       console.log("error => ",error);
  //      });

  //   };
  return (
    <div className="container px-5 py-10 mx-auto">
      {/* <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
        
        crossorigin="anonymous"
      ></Script> */}

      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Checkout
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Thanks for Shopping with us.
        </p>
      </div>
      <h2 className="text-center py-1">Delivery Details</h2>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                onChange={handleChange}
                value={name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                spellCheck="false"
                data-ms-editor="true"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                value={email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <textarea
                onChange={handleChange}
                value={address}
                cols={30}
                rows={2}
                id="address"
                name="address"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone Number
              </label>
              <input
              placeholder="10 Digit Phone.No"
                onChange={handleChange}
                value={phone}
                type="number"
                id="phone"
                name="phone"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
              placeholder="6 Digit Pincode"
                onChange={handleChange}
                value={pincode}
                type="number"
                id="pincode"
                name="pincode"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                onChange={handleChange}
                value={state}
                type="text"
                id="State"
                name="State"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                District
              </label>
              <input
                onChange={handleChange}
                value={city}
                type="text"
                id="City"
                name="City"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-left font-bold py-3 ">Review cart items</h2>
      <div className="sidecart items-center text-center bg-slate-100 p-10 font-semibold ">
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="mt-2">No Item to display</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="flex my-3">
                  <div className="">
                    {cart[k].name}({cart[k].size}/{cart[k].varient})
                  </div>
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
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addToCart(
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
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className=" font-medium">Subtotal:₹{subTotal}</span>
      </div>
      <Link href={"/orders"}>
        <button
          //onClick={intiatepayment}
          disabled={disabled}
          className="disabled:bg-slate-200 m-2 inline-flex text-white bg-slate-500 border-0 py-1 px-4 focus:outline-none hover:bg-slate-600 rounded"
        >
          <AiFillShopping className=" m-1" />
          PAY ₹{subTotal}
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
