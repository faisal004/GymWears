import React from "react";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name:name, email:email, password:password };
    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setName("");

    setEmail("");

    setPassword("");
  };

  return (
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="/logo-modified.png"
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form
                onSubmit={handleSubmit}
                action="http://localhost:3000/api/signup"
                method="POST"
              >
                <div className="mb-6">
                  <input
                    value={name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                    id="name"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                      value={email}
                      onChange={handleChange}
                      type="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                      id="email"
                      placeholder="Email address"
                      autoComplete="email"
                      required></input>
                </div>

                <div className="mb-6">
                  <input
                    value={password}
                    onChange={handleChange}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                    autoComplete="password"
                    required
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="sumbit"
                    className="inline-block px-7 py-3 bg-slate-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Sign Up
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <Link
                      href={"/login"}
                      className="text-red-600 hover:text-red-700
                      focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Log in to your existing Account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Signup;
