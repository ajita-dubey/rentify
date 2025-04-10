import React from "react";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  return (
    <section className="flex  justify-center items-center p-8  pt-20">
      <div className="flex   items-center p-5 w-96  border rounded-md shadow-md border-zinc-300">
        <form className="flex flex-col w-full">
          <h1 className="font-bold text-lg pb-4">Sign in to your account</h1>
          <div className="flex flex-col gap-y-2">
          <input
            type="text"
            placeholder="Enter your email?"
            className=" rounded-lg p-2  border border-gray-400  text-sm "
          />
          <input
            type="password"
            placeholder="Password"
            className=" rounded-lg p-2  border border-gray-400 text-sm "
          />
          <p className="text-orange-500 text-right text-sm">Forgot password?</p>
          <button className=" bg-orange-600 text-white rounded-lg outline-none p-2 text-sm ">
                Sign in
                 </button>
                 <button className=" flex  items-center justify-center gap-x-2 bg-blue-500 text-white rounded-lg outline-none p-2 text-sm  ">
                 <FcGoogle size={25} /><span>Sign in with Google</span> 
                 </button>
                 <div className="flex items-center pt-2 gap-x-2">
                 <span className="text-sm ">Don't have an account yet?</span><span className="text-orange-500 text-sm">Sign up</span>
                 </div>

          </div>
  </form>
      </div>
    </section>
  );
}

export default SignIn;
