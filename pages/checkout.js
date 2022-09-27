import React from "react";
import {
  AiFillShopping,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/Ai";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

const checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
//   const intiatepayment = async () => {
    
   
//     let oid=Math.floor(Math.random() * Date.now())
     
//     const data = { cart,subTotal,oid ,email:'email'};

//     let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   let txnRes = await a.json()
//   console.log(txnRes)
//   let txnToken=txnRes.txnToken

//     var config = {
//       "root": "",
//       "flow": "DEFAULT",
//       "data": {
//       "orderId": oid, /* update order id */
//       "token": txnToken, /* update token value */
//       "tokenType": "TXN_TOKEN",
//       "amount": subTotal /* update amount */
//       },
//       "handler": {
//       "notifyMerchant": function(eventName,data){
//       console.log("notifyMerchant handler function called");
//       console.log("eventName => ",eventName);
//       console.log("data => ",data);
//       }
//       }
//       };
      
      
      
//       window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
//       // after successfully updating configuration, invoke JS Checkout
//       window.Paytm.CheckoutJS.invoke();
//       }).catch(function onError(error){
//       console.log("error => ",error);
//       });
      
      
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
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <textarea
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
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="number"
                id="Phone"
                name="Phone"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="City"
                name="City"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="State"
                name="State"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
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
        <span className=" font-medium">Subtotal:{subTotal}</span>
      </div>
      <Link href={"/orders"}>
        <button
          //onClick={intiatepayment}
          className=" m-2 inline-flex text-white bg-slate-500 border-0 py-1 px-4 focus:outline-none hover:bg-slate-600 rounded"
        >
          <AiFillShopping className=" m-1" />
          PAY
        </button>
      </Link>
    </div>
  );
};

export default checkout;
