import React from "react";
import Link from "next/link";
import { useEffect ,useState} from "react";
import { useRouter } from "next/router";

const Forgotpass = () => {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  const handleChange= async(e)=>{
	if(e.target.name=='password'){
		setPassword(e.target.value)
	}
	if(e.target.name=='cpassword'){
		setCPassword(e.target.value)
	}
	if(e.target.name=='email'){
		setEmail(e.target.value)
	}
  }


  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const sendResetEmail = async () => {
	let data={
		email,
		sendMail:true
	}
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/forgotpassword`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let response = await res.json();
	if(response.success){

	}
	else{

	}
  };

  const resetPassword = async () => {
	if(password==cpassword){
	let data={
		email,
		sendMail:false
	}
	let res = await fetch(
		`${process.env.NEXT_PUBLIC_HOST}/api/forgotpassword`,
		{
		  method: "POST", // or 'PUT'
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(data),
		}
	  );
	  let response = await res.json();
	  if(response.success){
  
	  }
	  else{
  
	    }  }

  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        {router.query.token && (
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              {/* <div className="px-8 mb-4 text-center">
							<h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
							<p className="mb-4 text-sm text-gray-700">
								We get it, stuff happens. Just enter your email address below and well send you a
								link to reset your password!
							</p>
						</div> */}
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    New Password
                  </label>
                  <input
				  value={password}
				  onChange={handleChange}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="cpassword"
                  >
                    Confirm New Password
                  </label>
                  <input
				  value={cpassword}
				  onChange={handleChange}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="cpassword"
                    type="password"
                    placeholder="Confirm password"
                    name="cpassword"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
				  disabled={password!=cpassword}
                    onClick={resetPassword}
                    className="disabled:bg-red-200 w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="sumbit"
                  >
                    Reset Password
                  </button>
				  {password!=cpassword && <span className="text-red-600 text-sm">Password dont match</span>}
                </div>
				
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link href={"/signup"}>
                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Create an Account!
                    </a>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href={"/login"}>
                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? Login!
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}

        {!router.query.token && (
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and well send you a link to reset your password!
                </p>
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
				  value={email}
				  onChange={handleChange}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Email Address..."
                    name="email"
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
				  
                    onClick={sendResetEmail}
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </div>
				
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link href={"/signup"}>
                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Create an Account!
                    </a>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href={"/login"}>
                    <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Already have an account? Login!
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forgotpass;
