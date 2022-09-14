import Link from "next/link";
import React from "react";
import mongoose from "mongoose";
import Product from "../models/product";

const tshirt = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {products.map((item)=> {
             return <Link key={item._id} href={"/product/[slug].js"}>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl cursor-pointer border-black">
                <a className="block rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="/amazon.jpg"
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    T-shirts
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">{item.price}</p>
                </div>
              </div>
            </Link>})}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  
  
  let products = await Product.find();
  
  return {
    props: {products: JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  };
}

export default tshirt;
